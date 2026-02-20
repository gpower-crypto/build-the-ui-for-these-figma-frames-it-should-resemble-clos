import Header from "../components/Header";
import StoreCard from "../components/StoreCard";

export default function Stores() {
  const stores = [
    {
      id: "1",
      image: "https://placehold.co/600x400",
      city: "SEATTLE",
      address: "123 Main St, Seattle, WA 98101",
      phone: "(206) 555-1234",
    },
    {
      id: "2",
      image: "https://placehold.co/600x400",
      city: "PORTLAND",
      address: "456 Oak Ave, Portland, OR 97204",
      phone: "(503) 555-5678",
    },
    {
      id: "3",
      image: "https://placehold.co/600x400",
      city: "SAN FRANCISCO",
      address: "789 Pine Ln, San Francisco, CA 94107",
      phone: "(415) 555-9012",
    },
    {
      id: "4",
      image: "https://placehold.co/600x400",
      city: "LOS ANGELES",
      address: "101 Palm Dr, Los Angeles, CA 90012",
      phone: "(213) 555-3456",
    },
    {
      id: "5",
      image: "https://placehold.co/600x400",
      city: "NEW YORK",
      address: "202 Broadway, New York, NY 10003",
      phone: "(212) 555-7890",
    },
    {
      id: "6",
      image: "https://placehold.co/600x400",
      city: "CHICAGO",
      address: "303 Lake Shore Dr, Chicago, IL 60601",
      phone: "(312) 555-1122",
    },
    {
      id: "7",
      image: "https://placehold.co/600x400",
      city: "AUSTIN",
      address: "404 Red River St, Austin, TX 78701",
      phone: "(512) 555-3344",
    },
    {
      id: "8",
      image: "https://placehold.co/600x400",
      city: "DENVER",
      address: "505 High St, Denver, CO 80202",
      phone: "(303) 555-5566",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Stores</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Find one of our {stores.length} stores nearest you.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {stores.map((store) => (
              <StoreCard
                key={store.id}
                image={store.image}
                city={store.city}
                address={store.address}
                phone={store.phone}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
