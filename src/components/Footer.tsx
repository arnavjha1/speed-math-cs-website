import { useBranch } from '@/contexts/BranchContext';
import { cn } from '@/lib/utils';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { branch } = useBranch();

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className={cn(
              "font-bold text-xl mb-3",
              branch === 'speed' ? 'text-gradient-speed' : 'text-gradient-hacks'
            )}>
              {branch === 'speed' ? 'Speed Math & CS' : 'Smart Hacks'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {branch === 'speed'
                ? 'Empowering the next generation of engineers through coding education.'
                : 'Building the future through innovation and competitive hackathons.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#events" className="hover:text-foreground transition-colors">Events</a>
              <a href="#team" className="hover:text-foreground transition-colors">Team</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Speed Math & CS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
