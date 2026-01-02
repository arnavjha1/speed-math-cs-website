import { Code, Users, Lightbulb, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code,
    title: 'Coding Skills',
    description: 'Learn programming fundamentals through hands-on projects and real-world applications.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a vibrant community of young learners passionate about technology and innovation.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Develop critical thinking and problem-solving skills that extend beyond coding.',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'Earn certificates and recognition as you progress through our comprehensive curriculum.',
  },
];

const SpeedAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient-speed">Speed Math & CS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Founded in July 2024, we provide coding education for students in grade 3 and above, helping them build the skills they need to thrive in a technology-driven world.
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
                <div className="w-12 h-12 gradient-speed rounded-xl flex items-center justify-center mb-4">
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

export default SpeedAbout;
