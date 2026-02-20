import { Header } from "../components/Header";
import { LandingHero } from "../components/LandingHero";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <LandingHero />
        {/* Additional sections for the landing page can go here */}
      </main>
    </div>
  );
}
