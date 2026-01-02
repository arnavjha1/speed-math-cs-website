import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Arnav Jha',
    role: 'Founder & Co-President',
    bio: 'Passionate about teaching coding to young minds with 3+ years of experience. Designs engaging learning experiences that make coding fun and accessible. Arnav is dedicated to inspiring the next generation of programmers through innovative code camps and hackathons.',
  },
  {
    name: 'Sidhaanth Kapoor',
    role: 'Co-President',
    bio: 'Sidhaanth is the visionary leader of SPEED, driven by a strong passion for empowering the next generation of tech innovators. He is the main force behind planning code camps and hackathons, bringing five years of coding experience to the table. His leadership and technical expertise are key to inspiring participants and creating a vibrant community.',
  },
  /*{
    name: 'Mike Williams',
    role: 'Python Instructor',
    bio: 'Software engineer who loves introducing students to the world of programming.',
  },
  {
    name: 'Emily Davis',
    role: 'Web Development Instructor',
    bio: 'Full-stack developer dedicated to helping students build their first websites.',
  },
  {
    name: 'James Lee',
    role: 'Community Manager',
    bio: 'Keeps our community connected and ensures every student feels welcome.',
  },
  {
    name: 'Rachel Kim',
    role: 'Events Coordinator',
    bio: 'Organizes workshops and events that bring our community together.',
  },*/
];

const SpeedTeam = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient-speed">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our dedicated instructors and staff are here to guide you on your coding journey.
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
                <div className="w-20 h-20 gradient-speed rounded-full flex items-center justify-center mx-auto mb-4">
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

export default SpeedTeam;
