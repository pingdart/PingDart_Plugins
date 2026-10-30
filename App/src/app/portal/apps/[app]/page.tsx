'use client';

import React, { use } from 'react';
import Link from 'next/link';
import CustomScreen from '@/modules/custom/CustomScreen';
import { ArrowLeft, Box } from 'lucide-react';

interface PortalAppProps {
  params: Promise<{
    app: string;
  }>;
}

export default function PortalAppPage({ params }: PortalAppProps) {
  const { app } = use(params);
  const appId = (app || '').toLowerCase();

  return (
    <div className="min-h-screen bg-[#0b141a] text-slate-100 flex flex-col">
      <header className="h-14 border-b border-gray-800 bg-[#111b21] px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/user?tab=Custom"
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-sm font-semibold text-white">App: {app}</span>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {appId === 'custom' ? (
            <CustomScreen />
          ) : (
            <div className="p-8 text-center space-y-3 rounded-2xl border border-gray-800 bg-[#111b21]">
              <Box className="w-10 h-10 text-indigo-400 mx-auto" />
              <h2 className="text-lg font-bold text-white">Module: {app}</h2>
              <p className="text-xs text-gray-400">
                Create your module component at <code className="text-indigo-300">src/modules/{appId}</code>.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
