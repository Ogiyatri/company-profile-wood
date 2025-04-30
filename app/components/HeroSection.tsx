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
      <div className="relative z-10 text-white p-6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Welcome To <br />
          <span className="text-green-600 text-4xl md:text-5xl">
            PT. Busindo Adi Pratama
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-light mb-8">
          We are committed to ensuring premium hardwood products at all times,
          for all your needs.
        </p>
        <Link href="/products" passHref>
          <button className="px-6 sm:px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-800 transition duration-300 shadow-lg hover:cursor-pointer">
            Our Product
          </button>
        </Link>
      </div>
    </section>
  );
}
