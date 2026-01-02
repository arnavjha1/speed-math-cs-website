import { Rocket, Users, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Rocket,
    title: 'Build Projects',
    description: 'Create real-world applications and solutions during our intensive hackathon events.',
  },
  {
    icon: Users,
    title: 'Team Up',
    description: 'Collaborate with like-minded innovators and learn from experienced mentors.',
  },
  {
    icon: Trophy,
    title: 'Win Prizes',
    description: 'Compete for amazing prizes and recognition for your innovative solutions.',
  },
  {
    icon: Zap,
    title: 'Learn Fast',
    description: 'Accelerate your learning through hands-on experience and real challenges.',
  },
];

const HacksAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient-hacks">Smart Hacks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Smart Hacks hosts exciting hackathons where young innovators come together to build, compete, and win. Open to all skill levels!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 gradient-hacks rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HacksAbout;
