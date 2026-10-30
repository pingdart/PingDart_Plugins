'use client';

import React, { useState, useEffect } from 'react';
import { Blocks, Package, RefreshCw, Plus, CheckCircle, Database, Server } from 'lucide-react';

export default function CustomScreen() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/plugins/custom/items');
      if (res.ok) {
        const json = await res.json();
        setItems(json.data || []);
      }
    } catch (_) {
      // Offline / fallback mock data
      setItems([
        { id: 1, name: 'Sample Plugin Item 1', code: 'ITM-001', status: 'active' },
        { id: 2, name: 'Sample Plugin Item 2', code: 'ITM-002', status: 'pending' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-md">
              <Blocks className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Developer Plugin</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Extend PingDart with custom frontend components & backend APIs
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchItems}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Plugin Status</div>
            <div className="text-base font-semibold text-gray-900 dark:text-white">Active & Ready</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Database Binding</div>
            <div className="text-base font-semibold text-gray-900 dark:text-white">custom_items</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Backend Endpoint</div>
            <div className="text-base font-semibold text-gray-900 dark:text-white">/api/v1/plugins/custom</div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Plugin Data Records</h2>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium">
            {items.length} records
          </span>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {items.map((item, idx) => (
            <div key={item.id || idx} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{item.name || item.code}</div>
                <div className="text-xs text-gray-500">{item.code} &bull; Table: custom_items</div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {item.status || 'Active'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
