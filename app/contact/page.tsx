// app/contact/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <h2 className="text-3xl font-bold text-center">Hubungi Kami</h2>
            <div className="text-center text-gray-700 space-y-4">
              <p>
                <strong>Alamat:</strong> Jl. Contoh No.123, Kota, Provinsi,
                Indonesia
              </p>
              <p>
                <strong>Telepon:</strong> (021) 123-4567
              </p>
              <p>
                <strong>Email:</strong> info@tobawoodindoperkasa.com
              </p>
            </div>

            {/* Google Maps */}
            <div className="w-full mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6751127776693!2d110.36948971537113!3d-7.525987476667083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a167e5480e4c3%3A0x26d2c77a3e1d6b92!2sKantor%20Perusahaan!5e0!3m2!1sid!2sid!4v1616161616161!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
