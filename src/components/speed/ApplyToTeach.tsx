import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, GraduationCap, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    text: 'Make a difference in young lives',
  },
  {
    icon: Users,
    text: 'Join a supportive community',
  },
  {
    icon: GraduationCap,
    text: 'Share your knowledge and skills',
  },
];

const ApplyToTeach = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our <span className="text-gradient-speed">Teaching Team</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Inspire the next generation of engineers! We're looking for passionate individuals who love coding and want to share their knowledge with young learners.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-speed rounded-lg flex items-center justify-center shrink-0">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gradient-speed border-0 text-white w-fit">
                Apply to Teach
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>

            {/* Visual */}
            <div className="gradient-speed p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <GraduationCap className="h-24 w-24 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Become an Instructor</h3>
                <p className="opacity-90">Shape the future of technology education</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ApplyToTeach;
