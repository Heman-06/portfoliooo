'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ChevronRight, Folder, FolderOpen, File } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TreeContextType {
  expandedItems: string[];
  toggleItem: (id: string) => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

function useTree() {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTree must be used within a TreeProvider');
  }
  return context;
}

interface TreeProps {
  children: ReactNode;
  className?: string;
  initialExpandedItems?: string[];
}

export function Tree({ children, className, initialExpandedItems = [] }: TreeProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(initialExpandedItems);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <TreeContext.Provider value={{ expandedItems, toggleItem }}>
      <div className={cn('select-none', className)}>{children}</div>
    </TreeContext.Provider>
  );
}

interface FolderProps {
  children?: ReactNode;
  element: string;
  value: string;
}

export function FolderComponent({ children, element, value }: FolderProps) {
  const { expandedItems, toggleItem } = useTree();
  const isExpanded = expandedItems.includes(value);

  return (
    <div>
      <button
        onClick={() => toggleItem(value)}
        className="flex items-center gap-2 py-1.5 px-2 w-full text-left hover:bg-gray-100 rounded-md transition-colors group"
      >
        <ChevronRight
          size={16}
          className={cn(
            'text-gray-500 transition-transform',
            isExpanded && 'rotate-90'
          )}
        />
        {isExpanded ? (
          <FolderOpen size={18} className="text-yellow-500" />
        ) : (
          <Folder size={18} className="text-yellow-500" />
        )}
        <span className="text-sm font-medium text-gray-800">{element}</span>
      </button>
      {isExpanded && children && (
        <div className="ml-4 pl-4 border-l border-gray-200">{children}</div>
      )}
    </div>
  );
}

interface FileProps {
  children: ReactNode;
  value: string;
}

export function FileComponent({ children, value }: FileProps) {
  return (
    <div className="flex items-center gap-2 py-1.5 px-2 ml-2 hover:bg-gray-50 rounded-md transition-colors">
      <File size={16} className="text-gray-400" />
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}

// Export aliases to match the reference API
export { FolderComponent as Folder, FileComponent as File };
