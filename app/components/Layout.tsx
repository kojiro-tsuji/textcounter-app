'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="p-4 pb-24">
        {children}
      </div>
    </div>
  );
} 