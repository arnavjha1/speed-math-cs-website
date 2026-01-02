import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { useBranch } from '@/contexts/BranchContext';
import { cn } from '@/lib/utils';

interface AlertBannerProps {
  message: string;
  link?: string;
  linkText?: string;
}

const AlertBanner = ({ message, link, linkText = "Learn more" }: AlertBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { branch } = useBranch();

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "relative py-3 px-4 text-white text-center text-sm font-medium",
        branch === 'speed' ? 'gradient-speed' : 'gradient-hacks'
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <Megaphone className="h-4 w-4" />
        <span>{message}</span>
        {link && (
          <a
            href={link}
            className="underline underline-offset-2 hover:no-underline font-semibold"
          >
            {linkText}
          </a>
        )}
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Dismiss alert"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AlertBanner;
