import React, { createContext, useContext, useState, useCallback } from 'react';
import { Branch, BranchContextType } from '@/types/branch';

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export const BranchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branch, setBranchState] = useState<Branch>('speed');

  const setBranch = useCallback((newBranch: Branch) => {
    setBranchState(newBranch);
  }, []);

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      <div className={branch === 'speed' ? 'theme-speed' : 'theme-hacks'}>
        {children}
      </div>
    </BranchContext.Provider>
  );
};

export const useBranch = () => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
};
