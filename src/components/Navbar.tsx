import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useBranch } from '@/contexts/BranchContext';
import { cn } from '@/lib/utils';
import speedLogo from '@/assets/speed-logo.png';
import hacksLogo from '@/assets/smarthacks-logo.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { branch } = useBranch();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={branch === 'speed' ? speedLogo : hacksLogo}
              alt={branch === 'speed' ? 'Speed Math & CS' : 'Smart Hacks'}
              className="h-10 w-auto"
            />
            <span className={cn(
              "font-bold text-lg hidden sm:block",
              branch === 'speed' ? 'text-gradient-speed' : 'text-gradient-hacks'
            )}>
              {branch === 'speed' ? 'Speed Math & CS' : 'Smart Hacks'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            {branch === 'hacks' && (
              <a
                href="#sponsors"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Sponsors
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
              {branch === 'hacks' && (
                <a
                  href="#sponsors"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
                >
                  Sponsors
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
