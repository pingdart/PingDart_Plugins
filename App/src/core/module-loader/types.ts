import React from 'react';

export interface ModulePermission {
  id: string; // e.g. 'crm.deals.manage'
  name: string;
  defaultRoles?: string[];
}

export interface ModuleMenuItem {
  title: string;
  path: string; // Relative e.g. "/deals" or absolute "/portal/apps/crm/deals"
  icon?: string; // Lucide icon name
  badge?: string | number;
  permission?: string;
}

export type WidgetZone = 'dashboard.top' | 'dashboard.side' | 'dashboard.bottom' | 'dashboard.analytics';
export type WidgetSize = 'small' | 'medium' | 'large' | 'full';

export interface ModuleWidget {
  id: string;
  title: string;
  zone: WidgetZone;
  size?: WidgetSize;
  Component: React.ComponentType<any>;
  permission?: string;
}

export interface ModuleManifest {
  id: string; // unique lowercase identifier e.g. 'crm', 'budget'
  displayName: string;
  version: string;
  minPlatformVersion?: string;
  compatibility?: string[];
  dependencies?: string[];
  allowedEvents?: string[];
  description?: string;
  icon: string; // Icon name e.g. 'Briefcase', 'Wallet'
  basePath: string; // e.g. "/portal/apps/crm"
  permissions?: (string | ModulePermission)[];
  menus: ModuleMenuItem[];
  routesList?: string[];
  widgets?: ModuleWidget[];
  // Map of sub-routes within the module to their respective React components
  routes: Record<string, React.ComponentType<any>>;
  // Default screen component to render when visiting basePath directly
  DefaultScreen: React.ComponentType<any>;
}
