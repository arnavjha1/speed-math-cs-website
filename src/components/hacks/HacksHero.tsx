import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy } from 'lucide-react';
import hacksLogo from '@/assets/smarthacks-logo.png';

const HacksHero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-hacks/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hacks-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-6">
              <Trophy className="h-4 w-4" />
              Hackathons with Huge Prizes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build. Compete.{' '}
              <span className="text-gradient-hacks">Win.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Join the most exciting hackathons for young innovators! Collaborate, create, and compete for amazing prizes while building real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-hacks border-0 text-white">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Past Events
              </Button>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-hacks rounded-full blur-3xl opacity-20 scale-110" />
              <img
                src={hacksLogo}
                alt="Smart Hacks"
                className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-pulse-glow rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HacksHero;
