// app/page.tsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductCard from "./components/ProductCard";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Produk Unggulan Section */}
        <section id="products" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Produk Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard title="Kayu Meranti" image="/images/product1.jpg" />
              <ProductCard title="Kayu Kamper" image="/images/product2.jpg" />
              <ProductCard title="Kayu Mahoni" image="/images/product3.jpg" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
