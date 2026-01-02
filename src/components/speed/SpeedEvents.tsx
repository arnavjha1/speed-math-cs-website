import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Intro to Python / ML & Web Development - Jan Classes',
    date: 'January 17 - 21, 2026',
    time: '7:00 PM - 8:00 PM PST',
    location: 'Online - Google Meet',
    description: 'New classes starting January 17th focusing on Python programming, machine learning basics, and web development fundamentals using HTML, CSS, and JavaScript.',
    isNew: true,
  },
  /*{
    title: 'Web Development Bootcamp',
    date: 'January 22, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Center',
    description: 'Learn HTML, CSS, and JavaScript in this hands-on bootcamp.',
    isNew: false,
  },*/
  {
    title: 'AP Tutoring Sessions',
    date: 'April 21st - May 2nd, 2025',
    time: 'Depended on AP course',
    location: 'Online - Google Meet',
    description: 'Personalized tutoring sessions to help students prepare for their AP exams in Computer Science A and Computer Science Principles, and several other APs such as AP Physics C: E&M, AP Calculus AB, and AP Micro/Macro. Started the development of an app called learn-elo to help people study for their APs: <a href="https://learn-elo.vercel.app">https://learn-elo.vercel.app</a>',
    isNew: false,
  },
  {
    title: 'AMC8, AMC10, and MathCounts Prep Workshop',
    date: 'December 22 - 26, 2024',
    time: '4:00 PM - 5:00 PM PST',
    location: 'Online - Google Meet',
    description: 'Our first classes ever focused on preparing students for math competitions like AMC8, AMC10, and MathCounts.',
    isNew: false,
  },
];

const SpeedEvents = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming & Past <span className="text-gradient-speed">Events</span>
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
