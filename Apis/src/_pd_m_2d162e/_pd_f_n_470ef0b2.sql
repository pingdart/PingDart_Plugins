-- PingDart V2 — Native Plugin Bridge Database Schema Migration
-- Migration 005_native_bridge_schema.sql

CREATE TABLE IF NOT EXISTS plugin_native_permissions (
  id VARCHAR(64) PRIMARY KEY,
  tenant_id VARCHAR(64) NOT NULL,
  plugin_id VARCHAR(64) NOT NULL,
  permission VARCHAR(64) NOT NULL,
  granted VARCHAR(16) NOT NULL CHECK (granted IN ('once', 'always', 'denied')),
  granted_by VARCHAR(64) NOT NULL,
  granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NULL,
  UNIQUE(tenant_id, plugin_id, permission)
);

CREATE TABLE IF NOT EXISTS plugin_native_policies (
  id VARCHAR(64) PRIMARY KEY,
  tenant_id VARCHAR(64) NOT NULL,
  permission VARCHAR(64) NOT NULL,
  policy VARCHAR(32) NOT NULL CHECK (policy IN ('allow', 'deny', 'approval_required')),
  updated_by VARCHAR(64) NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(tenant_id, permission)
);

CREATE TABLE IF NOT EXISTS plugin_native_usage (
  id VARCHAR(64) PRIMARY KEY,
  tenant_id VARCHAR(64) NOT NULL,
  plugin_id VARCHAR(64) NOT NULL,
  permission VARCHAR(64) NOT NULL,
  call_count INTEGER DEFAULT 0,
  last_called_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(tenant_id, plugin_id, permission)
);

CREATE TABLE IF NOT EXISTS plugin_audit_logs (
  id VARCHAR(64) PRIMARY KEY,
  tenant_id VARCHAR(64) NOT NULL,
  plugin_id VARCHAR(64) NOT NULL,
  user_id VARCHAR(64) NOT NULL,
  action VARCHAR(128) NOT NULL,
  payload JSON,
  result VARCHAR(32) NOT NULL,
  duration_ms INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS plugin_platform_kill_switches (
  permission VARCHAR(64) PRIMARY KEY,
  enabled BOOLEAN DEFAULT TRUE,
  updated_by VARCHAR(64) NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_audit_tenant_plugin ON plugin_audit_logs(tenant_id, plugin_id, created_at);
CREATE INDEX IF NOT EXISTS idx_native_usage_tenant ON plugin_native_usage(tenant_id, plugin_id);
