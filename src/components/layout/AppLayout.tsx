// src/components/layout/AppLayout.tsx
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/layout/Header';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AppLayout() {
  return (
    <div className="bg-muted min-h-screen">
      <Header />
      <ScrollArea className="w-full h-[calc(100vh-3.5rem)]">
        <main className="relative bg-background mx-auto -mt-1 p-4 sm:p-6 border w-full max-w-150">
          <Outlet />
        </main>
      </ScrollArea>
    </div>

  );
}
