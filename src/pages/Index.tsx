import { useBranch } from '@/contexts/BranchContext';
import BranchToggle from '@/components/BranchToggle';
import AlertBanner from '@/components/AlertBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Speed components
import SpeedHero from '@/components/speed/SpeedHero';
import SpeedAbout from '@/components/speed/SpeedAbout';
import SpeedEvents from '@/components/speed/SpeedEvents';
import SpeedTeam from '@/components/speed/SpeedTeam';
import ApplyToTeach from '@/components/speed/ApplyToTeach';
import SpeedContact from '@/components/speed/SpeedContact';

// Hacks components
import HacksHero from '@/components/hacks/HacksHero';
import HacksAbout from '@/components/hacks/HacksAbout';
import HacksEvents from '@/components/hacks/HacksEvents';
import HacksTeam from '@/components/hacks/HacksTeam';
import HacksSponsors from '@/components/hacks/HacksSponsors';
import HacksContact from '@/components/hacks/HacksContact';

const Index = () => {
  const { branch } = useBranch();

  return (
    <div className="min-h-screen flex flex-col">
      <AlertBanner
        message={branch === 'speed' 
          ? "🎉 New Python class starting January 15th!" 
          : "🚀 Smart Hacks 2026 registration now open!"}
        link="#events"
        linkText="Learn more"
      />
      <BranchToggle />
      <Navbar />
      
      <main className="flex-1">
        {branch === 'speed' ? (
          <>
            <SpeedHero />
            <SpeedAbout />
            <SpeedEvents />
            <SpeedTeam />
            <ApplyToTeach />
            <SpeedContact />
          </>
        ) : (
          <>
            <HacksHero />
            <HacksAbout />
            <HacksEvents />
            <HacksTeam />
            <HacksSponsors />
            <HacksContact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
