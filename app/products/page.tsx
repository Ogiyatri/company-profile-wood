// app/products/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
            Our Products
          </h1>
        </section>

        {/* Product List */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Jenis Kayu yang Kami Sediakan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <ProductCard title="Kayu Meranti" image="/images/product1.jpg" />
              <ProductCard title="Kayu Kamper" image="/images/product2.jpg" />
              <ProductCard title="Kayu Mahoni" image="/images/product3.jpg" />
              <ProductCard title="Kayu Jati" image="/images/product4.jpg" />
              <ProductCard
                title="Kayu Bengkirai"
                image="/images/product5.jpg"
              />
              <ProductCard title="Kayu Keruing" image="/images/product6.jpg" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
