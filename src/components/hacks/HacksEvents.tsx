import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const events = [
  {
    title: 'Smart Hacks 2026',
    date: 'March 15-17, 2026',
    location: 'Silicon Valley Convention Center',
    prize: '$10,000',
    theme: 'AI for Good',
    description: 'Our flagship hackathon focused on building AI solutions for social impact.',
    isNew: true,
  },
  {
    title: 'Code for Climate',
    date: 'April 22-23, 2026',
    location: 'Online',
    prize: '$5,000',
    theme: 'Climate Tech',
    description: 'Build innovative solutions to combat climate change.',
    isNew: true,
  },
  {
    title: 'EdTech Innovate',
    date: 'May 10-12, 2026',
    location: 'TechHub Downtown',
    prize: '$7,500',
    theme: 'Education',
    description: 'Create the future of education technology.',
    isNew: false,
  },
  {
    title: 'Health Hack',
    date: 'June 5-7, 2026',
    location: 'Medical Campus Center',
    prize: '$8,000',
    theme: 'Healthcare',
    description: 'Innovate in healthcare and wellness technology.',
    isNew: false,
  },
];

const HacksEvents = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="text-gradient-hacks">Hackathons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our exciting hackathons and compete for amazing prizes!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className="hover:shadow-lg transition-shadow overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant="secondary" className="mt-1">{event.theme}</Badge>
                  </div>
                  {event.isNew && (
                    <Badge className="gradient-hacks border-0 text-white shrink-0">NEW</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">{event.prize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HacksEvents;
