import { Card, CardContent } from '@/components/ui/card';

const sponsors = [
  { name: 'TechCorp', tier: 'Platinum' },
  { name: 'InnovateTech', tier: 'Platinum' },
  { name: 'FutureLabs', tier: 'Gold' },
  { name: 'CodeWorks', tier: 'Gold' },
  { name: 'DevStudio', tier: 'Silver' },
  { name: 'CloudNine', tier: 'Silver' },
  { name: 'DataDriven', tier: 'Silver' },
  { name: 'AI Solutions', tier: 'Silver' },
];

const tierColors: Record<string, string> = {
  Platinum: 'from-slate-400 to-slate-600',
  Gold: 'from-yellow-400 to-amber-600',
  Silver: 'from-gray-300 to-gray-500',
};

const HacksSponsors = () => {
  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-hacks">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thank you to our amazing sponsors who make Smart Hacks possible!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card
              key={sponsor.name}
              className="text-center hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="py-8">
                <div
                  className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${tierColors[sponsor.tier]}`}
                >
                  <span className="text-2xl font-bold text-white">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold">{sponsor.name}</h3>
                <p className="text-muted-foreground text-sm">{sponsor.tier} Sponsor</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in sponsoring Smart Hacks?</p>
          <a
            href="#contact"
            className="text-primary font-semibold hover:underline"
          >
            Contact us to learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HacksSponsors;
