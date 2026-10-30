'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Blocks, Layers } from 'lucide-react';
import CustomScreen from '@/modules/custom/CustomScreen';

function UserContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get('tab') || 'Custom';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/user?tab=${tab}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b141a] text-slate-100">
      <header className="h-14 border-b border-gray-800 bg-[#111b21] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow">
            <Blocks className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              PingDart Workspace
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-indigo-900/60 text-indigo-400 border border-indigo-700/50">
                Next.js Dev Mode
              </span>
            </div>
            <div className="text-[11px] text-gray-400">Pluggable Developer Environment</div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#0b141a] p-1 rounded-lg border border-gray-800">
          <button
            onClick={() => handleTabChange('Custom')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition ${
              activeTab.toLowerCase() === 'custom'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Custom Plugin
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          {activeTab.toLowerCase() === 'custom' ? (
            <CustomScreen />
          ) : (
            <div className="p-8 text-center space-y-3 rounded-2xl border border-gray-800 bg-[#111b21]">
              <Layers className="w-10 h-10 text-indigo-400 mx-auto" />
              <h2 className="text-lg font-bold text-white">Tab: {activeTab}</h2>
              <p className="text-xs text-gray-400">
                Create a component in <code className="text-indigo-300">src/modules/{activeTab.toLowerCase()}</code> to render here.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function UserPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b141a] flex items-center justify-center text-gray-400 text-sm">Loading workspace...</div>}>
      <UserContent />
    </Suspense>
  );
}
