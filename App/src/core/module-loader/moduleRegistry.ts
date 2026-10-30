import { ModuleManifest } from './types';

export class ModuleRegistry {
  private static instance: ModuleRegistry;
  private modules: Map<string, ModuleManifest> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      (window as any).__PD_REGISTRY__ = this;
      if (Array.isArray((window as any).__PD_DISCOVERED_MANIFESTS__)) {
        (window as any).__PD_DISCOVERED_MANIFESTS__.forEach((m: ModuleManifest) => {
          this.register(m);
        });
      }
    }
  }

  static getInstance(): ModuleRegistry {
    if (!ModuleRegistry.instance) {
      ModuleRegistry.instance = new ModuleRegistry();
    }
    return ModuleRegistry.instance;
  }

  register(manifest: ModuleManifest): void {
    if (manifest && manifest.id) {
      this.modules.set(manifest.id.toLowerCase(), manifest);
      if (typeof window !== 'undefined') {
        (window as any).__PD_REGISTRY__ = this;
      }
    }
  }

  get(id: string): ModuleManifest | undefined {
    if (!id) return undefined;
    const norm = id.toLowerCase();
    const found = this.modules.get(norm);
    if (found) return found;
    if (typeof window !== 'undefined' && Array.isArray((window as any).__PD_DISCOVERED_MANIFESTS__)) {
      const disc = (window as any).__PD_DISCOVERED_MANIFESTS__.find(
        (m: any) => m && m.id && m.id.toLowerCase() === norm
      );
      if (disc) {
        this.modules.set(norm, disc);
        return disc;
      }
    }
    return undefined;
  }

  has(id: string): boolean {
    if (!id) return false;
    const norm = id.toLowerCase();
    if (this.modules.has(norm)) return true;
    if (typeof window !== 'undefined' && Array.isArray((window as any).__PD_DISCOVERED_MANIFESTS__)) {
      return (window as any).__PD_DISCOVERED_MANIFESTS__.some(
        (m: any) => m && m.id && m.id.toLowerCase() === norm
      );
    }
    return false;
  }

  getAll(): ModuleManifest[] {
    const list = Array.from(this.modules.values());
    if (typeof window !== 'undefined' && Array.isArray((window as any).__PD_DISCOVERED_MANIFESTS__)) {
      const existingIds = new Set(list.map((m) => m.id.toLowerCase()));
      (window as any).__PD_DISCOVERED_MANIFESTS__.forEach((m: ModuleManifest) => {
        if (m && m.id && !existingIds.has(m.id.toLowerCase())) {
          list.push(m);
          this.modules.set(m.id.toLowerCase(), m);
        }
      });
    }
    return list;
  }
}

export const moduleRegistry = ModuleRegistry.getInstance();
export default moduleRegistry;
