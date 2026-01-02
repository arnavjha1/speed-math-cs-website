import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Introduction to Python',
    date: 'January 15, 2026',
    time: '3:00 PM - 5:00 PM',
    location: 'Online - Zoom',
    description: 'A beginner-friendly workshop introducing Python programming basics.',
    isNew: true,
  },
  {
    title: 'Web Development Bootcamp',
    date: 'January 22, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Center',
    description: 'Learn HTML, CSS, and JavaScript in this hands-on bootcamp.',
    isNew: true,
  },
  {
    title: 'Game Development with Scratch',
    date: 'February 5, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Online - Zoom',
    description: 'Create your own video games using Scratch programming.',
    isNew: false,
  },
  {
    title: 'Math & Logic Puzzles',
    date: 'February 12, 2026',
    time: '3:00 PM - 4:30 PM',
    location: 'Local Library',
    description: 'Sharpen your problem-solving skills with fun math challenges.',
    isNew: false,
  },
];

const SpeedEvents = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="text-gradient-speed">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our coding classes and workshops designed for young learners.
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
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  {event.isNew && (
                    <Badge className="gradient-speed border-0 text-white shrink-0">NEW</Badge>
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
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
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

export default SpeedEvents;
