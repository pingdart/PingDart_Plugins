import React from 'react';
import dynamic from 'next/dynamic';
import { ModuleManifest } from '@/core/module-loader/types';
import moduleRegistry from '@/core/module-loader/moduleRegistry';

const CustomScreen = dynamic(() => import('./CustomScreen'), { ssr: false });

export const customManifest: ModuleManifest = {
  id: 'custom',
  displayName: 'Custom Plugin',
  version: '1.0.0',
  minPlatformVersion: '1.0.0',
  compatibility: ['1.x'],
  dependencies: [],
  allowedEvents: ['custom.created', 'custom.updated'],
  description: 'Custom developer plugin for PingDart platform.',
  icon: 'Blocks',
  basePath: '/portal/apps/custom',
  permissions: [
    { id: 'custom.view', name: 'View Custom Plugin', defaultRoles: ['admin', 'member'] },
    { id: 'custom.manage', name: 'Manage Custom Plugin', defaultRoles: ['admin'] },
  ],
  menus: [
    { title: 'Overview', path: '', icon: 'LayoutDashboard' },
    { title: 'Items', path: 'items', icon: 'Package' },
  ],
  routesList: ['', 'items'],
  DefaultScreen: CustomScreen,
  routes: {
    '': CustomScreen,
    'items': CustomScreen,
  }
};

moduleRegistry.register(customManifest);
export default customManifest;
