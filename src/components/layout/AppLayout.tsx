// src/components/layout/AppLayout.tsx
import { Outlet } from 'react-router-dom';

import { TopNav } from '@/components/top-nav';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AppLayout() {
  return (
    <div className="bg-muted min-h-screen">
      <TopNav />
      <ScrollArea className="w-full h-full">
        <main className="bg-background mx-auto -mt-1 p-6 border rounded-b-3xl w-full max-w-150 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  );
}
