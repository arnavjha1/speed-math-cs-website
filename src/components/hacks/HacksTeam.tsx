import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jordan Rivera',
    role: 'Director of Operations',
    bio: 'Leads the Smart Hacks team with a passion for fostering innovation in young minds.',
  },
  {
    name: 'Taylor Martinez',
    role: 'Lead Organizer',
    bio: 'Orchestrates amazing hackathon experiences from concept to execution.',
  },
  {
    name: 'Casey Thompson',
    role: 'Technical Director',
    bio: 'Ensures our hackathons run smoothly with top-notch technical infrastructure.',
  },
  {
    name: 'Morgan Chen',
    role: 'Mentorship Lead',
    bio: 'Connects participants with industry mentors for guidance and support.',
  },
  {
    name: 'Riley Patel',
    role: 'Partnerships Manager',
    bio: 'Builds relationships with sponsors and partners to bring bigger prizes.',
  },
  {
    name: 'Quinn Anderson',
    role: 'Marketing Lead',
    bio: 'Spreads the word about Smart Hacks to reach more young innovators.',
  },
];

const HacksTeam = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient-hacks">Organizers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The passionate team behind Smart Hacks, dedicated to creating unforgettable hackathon experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="text-center hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 gradient-hacks rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HacksTeam;
