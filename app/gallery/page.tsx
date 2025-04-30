// app/contact/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
            Gallery
          </h1>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <h2 className="text-3xl font-bold text-center text-black">Gallery PT Busindo Adi Pratama</h2>
            <p className="text-center text-gray-600">Explore our collection of projects and products.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
