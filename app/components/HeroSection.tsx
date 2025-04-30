// app/components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Gambar1.jpeg')" }}
    >
      {/* Gelap di sebelah kiri */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

      {/* Teks berada di kiri */}
      <div className="relative z-10 text-white p-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome To <br /> PT. Busindo Adi Pratama
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8">
          We are committed to ensuring premium hardwood products at all times,
          for all your needs
        </p>
        <Link href="/products" passHref>
          <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:cursor-pointer">
            Our Product
          </button>
        </Link>
      </div>
    </section>
  );
}
