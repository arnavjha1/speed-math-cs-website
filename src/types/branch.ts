export type Branch = 'speed' | 'hacks';

export interface BranchContextType {
  branch: Branch;
  setBranch: (branch: Branch) => void;
}
