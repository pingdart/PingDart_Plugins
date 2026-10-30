/**
 * PingDart Universal Developer Modules Index
 * 
 * NOTE FOR DEVELOPERS:
 * You do NOT need to manually register or import modules in this file!
 * Any module placed inside `src/modules/<folder>/` is dynamically discovered,
 * compiled, and registered with the PingDart platform automatically.
 */
import { moduleRegistry } from '../core/module-loader/moduleRegistry';
export * from '../core/module-loader/moduleRegistry';
export * from '../core/module-loader/types';

export function getDiscoveredModules() {
  if (typeof window !== 'undefined' && Array.isArray((window as any).__PD_DISCOVERED_MANIFESTS__)) {
    return (window as any).__PD_DISCOVERED_MANIFESTS__;
  }
  return moduleRegistry.getAll();
}

export default moduleRegistry;
