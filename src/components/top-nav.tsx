// src/components/top-nav.tsx
'use client';
import { Home, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useTheme from '@/hooks/useTheme';

export function TopNav() {
  const location = useLocation();
  const { toggleTheme } = useTheme();

  return (
    <header className="top-0 z-50 sticky bg-background/95 backdrop-blur border-border border-b w-full h-14">
      <div className="flex items-center px-4 h-full">
        <div className="flex justify-between items-center mx-auto w-full max-w-152">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 px-3 h-10"
            asChild
          >
            <Link
              to="/"
              className={`font-medium ${location.pathname === '/' ? 'bg-accent text-accent-foreground' : ''}`}
            >
              <Home className="w-5 h-5 shrink-0" />
              <span>Timeline</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="gap-1 hover:bg-accent px-3 h-10 font-medium"
            asChild
          >
            <Link to="/following" className="flex items-center min-w-15 text-xs">
              <span className="font-semibold text-sm">456</span>
              <span className="text-muted-foreground">Following</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="gap-1 hover:bg-accent px-3 h-10 font-medium"
            asChild
          >
            <Link to="/followers" className="flex items-center min-w-15 text-xs">
              <span className="font-semibold text-sm">123</span>
              <span className="text-muted-foreground">Followers</span>
            </Link>
          </Button>

          <DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto h-10 cursor-pointer"
              asChild
            >
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2 truncate">
                  <span className="font-medium text-sm">@username</span>
                  <Avatar className="w-7 h-7">
                    <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-sm">Alisa</p>
                  <p className="text-muted-foreground text-xs">@username</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>

              {/* Theme Toggle */}
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
                <Sun className="w-4 h-4 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
                <Moon className="absolute w-4 h-4 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
                <span>Toggle theme</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
