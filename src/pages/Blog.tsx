
import { Header } from "../components/Header";
import { BlogHero } from "../components/BlogHero";
import { BlogPostCard } from "../components/BlogPostCard";

export function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Section 01 - Blog Hero */}
        <BlogHero />

        {/* Section 02 - The Latest Blog Posts */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
              The Latest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="How To Style Winter Whites"
                category="Style"
              />
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="We Won A Glossy Award"
                category="Transparency"
              />
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="Coordinate Your Style: Matching Outfits for Everyone"
                category="Style"
              />
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="Our Guide to Fall Layering"
                category="Style"
              />
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="The Best Jeans for Every Body"
                category="Style"
              />
              <BlogPostCard
                imageSrc="https://via.placeholder.com/600x400"
                title="Meet the Makers: Our Ethical Factory Partners"
                category="Transparency"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
