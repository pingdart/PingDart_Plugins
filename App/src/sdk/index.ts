/**
 * PingDart Plugin Developer SDK
 * Official type contracts and hooks for extending PingDart
 */
export * from '../core/module-loader/types';
export { default as moduleRegistry } from '../core/module-loader/moduleRegistry';

export interface PluginUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface PluginContext {
  user: PluginUser | null;
  token: string | null;
  apiUrl: string;
}
