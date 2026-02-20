import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

export function Search() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        <section className="container mx-auto max-w-2xl">
          <div className="bg-gray-100 rounded-md p-2">
            <SearchInput placeholder="Search" />
          </div>
        </section>
      </main>
    </div>
  );
}
