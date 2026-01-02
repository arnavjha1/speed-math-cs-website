import { useBranch } from '@/contexts/BranchContext';
import { cn } from '@/lib/utils';

const BranchToggle = () => {
  const { branch, setBranch } = useBranch();

  return (
    <div className="flex items-center justify-center py-2 bg-muted/50 border-b">
      <div className="flex items-center bg-background rounded-full p-1 shadow-sm border">
        <button
          onClick={() => setBranch('speed')}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
            branch === 'speed'
              ? "gradient-speed text-white shadow-md"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Speed Math & CS
        </button>
        <button
          onClick={() => setBranch('hacks')}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
            branch === 'hacks'
              ? "gradient-hacks text-white shadow-md"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Smart Hacks
        </button>
      </div>
    </div>
  );
};

export default BranchToggle;
