/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const cp = require('child_process');
const chokidar = require('chokidar');
const electron = require('electron');

let child = null;
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const reloadWatcher = {
  debouncer: null,
  ready: false,
  watcher: null,
  restarting: false,
};

///*
function runBuild() {
  return new Promise((resolve) => {
    const proc = cp.exec('npm run build', { cwd: __dirname });
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('exit', () => resolve());
    proc.on('error', (err) => {
      console.warn('Build error:', err.message);
      resolve();
    });
  });
}

async function spawnElectron() {
  if (child !== null) {
    try {
      if (child.stdin) child.stdin.pause();
      child.kill();
    } catch (_) {}
    child = null;
    await runBuild();
  }
  // Do NOT pass shell: true here because electron is an executable binary (.exe)
  // and the workspace path contains spaces ("Ravindra Projucts").
  // Native CreateProcess handles spaces without cmd.exe argument corruption.
  child = cp.spawn(electron, ['--inspect=5858', './'], {
    cwd: __dirname,
    stdio: 'inherit',
    windowsHide: false
  });
  child.on('exit', () => {
    if (!reloadWatcher.restarting) {
      process.exit(0);
    }
  });
  child.on('error', (err) => {
    console.error('Electron spawn error:', err.message);
  });
}

function setupReloadWatcher() {
  reloadWatcher.watcher = chokidar
    .watch('./src/**/*', {
      ignored: /[/\\]\./,
      persistent: true,
    })
    .on('ready', () => {
      reloadWatcher.ready = true;
    })
    .on('all', (_event, _path) => {
      if (reloadWatcher.ready) {
        clearTimeout(reloadWatcher.debouncer);
        reloadWatcher.debouncer = setTimeout(async () => {
          console.log('Restarting');
          reloadWatcher.restarting = true;
          await spawnElectron();
          reloadWatcher.restarting = false;
          reloadWatcher.ready = false;
          clearTimeout(reloadWatcher.debouncer);
          reloadWatcher.debouncer = null;
          reloadWatcher.watcher = null;
          setupReloadWatcher();
        }, 500);
      }
    });
}

(async () => {
  await runBuild();
  await spawnElectron();
  setupReloadWatcher();
})();
