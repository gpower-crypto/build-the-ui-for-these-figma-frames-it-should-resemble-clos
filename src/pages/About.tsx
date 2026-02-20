import { Header } from "../components/Header";

export function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-white">
      <Header />
      <section className="w-full flex justify-center py-20 px-4 bg-gray-900">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We believe
            <br />
            we can all make
            <br />
            a difference.
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90">
            Our way: Exceptional quality.
            <br />
            Ethical factories. Radical Transparency.
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center py-20 px-4 bg-white">
        <div className="max-w-4xl text-left text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            At Everlane, we want the right choice to be as easy as putting on a great T-shirt.
            That’s why we partner with the best, ethical factories around the world.
            Source only the finest materials. And share those stories with you—down to the true cost of every product we make.
            It’s a new way of doing things. And it’s why we’re here.
          </p>
          <p className="mb-6">
            We believe that you have the right to know where your clothes are made, how they’re made, and what they’re made of.
            That’s why we created our transparent pricing model, showing you the true cost of every product—from materials to labor to transportation.
            We’re committed to making quality essentials that last, and we want you to feel good about every purchase you make.
          </p>
          <p>
            Join us in our mission to create a more ethical and sustainable fashion industry.
            Because together, we can make a difference.
          </p>
        </div>
      </section>
    </div>
  );
}
