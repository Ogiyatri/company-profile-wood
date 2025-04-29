// app/about/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1">
        <section
          className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Tentang Perusahaan Kami
            </h2>
            <p className="text-gray-700 text-lg leading-8 text-justify mb-8">
              PT. Toba Wood Indo Perkasa adalah perusahaan yang berfokus pada
              penyediaan berbagai jenis kayu berkualitas untuk kebutuhan
              industri, konstruksi, dan ekspor. Kami berkomitmen untuk menjaga
              standar kualitas tinggi dengan proses produksi yang ramah
              lingkungan serta mengutamakan keberlanjutan sumber daya alam.
            </p>
            <p className="text-gray-700 text-lg leading-8 text-justify mb-8">
              Dengan pengalaman bertahun-tahun di industri ini, kami memahami
              pentingnya kualitas, ketepatan waktu, dan layanan pelanggan yang
              profesional. Kami melayani berbagai permintaan kayu seperti Kayu
              Meranti, Kayu Kamper, dan Kayu Mahoni, serta berbagai spesifikasi
              lain sesuai kebutuhan pelanggan.
            </p>
            <p className="text-gray-700 text-lg leading-8 text-justify">
              Visi kami adalah menjadi penyedia kayu terbaik di Indonesia dan
              Asia Tenggara. Misi kami adalah memberikan produk kayu berkualitas
              tinggi sambil menjaga kelestarian lingkungan melalui praktik
              produksi yang bertanggung jawab.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
