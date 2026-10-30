import { ModuleManifest } from './types';

export class ModuleRegistry {
  private static instance: ModuleRegistry;
  private modules: Map<string, ModuleManifest> = new Map();

  static getInstance(): ModuleRegistry {
    if (!ModuleRegistry.instance) {
      ModuleRegistry.instance = new ModuleRegistry();
    }
    return ModuleRegistry.instance;
  }

  register(manifest: ModuleManifest): void {
    if (manifest && manifest.id) {
      this.modules.set(manifest.id.toLowerCase(), manifest);
      if (typeof window !== 'undefined' && (window as any).__PD_REGISTRY__) {
        (window as any).__PD_REGISTRY__.register(manifest);
      }
    }
  }

  get(id: string): ModuleManifest | undefined {
    return this.modules.get(id.toLowerCase());
  }

  getAll(): ModuleManifest[] {
    return Array.from(this.modules.values());
  }
}

export const moduleRegistry = ModuleRegistry.getInstance();
export default moduleRegistry;
