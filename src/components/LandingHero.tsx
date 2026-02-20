import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-[url('https://via.placeholder.com/1920x600')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
        <h1 className="text-6xl font-bold mb-4">Your Cozy Era</h1>
        <p className="text-xl mb-8">Discover our new collection.</p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
          Shop Now
        </Button>
      </div>
    </section>
  );
}