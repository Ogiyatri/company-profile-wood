// app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/Gambar1.jpeg" // Ganti sesuai gambar hero kamu
        alt="Hero Image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PT. Busindo Adi Pratama
        </h1>
        <p className="text-lg md:text-2xl font-light">
          Penyedia Kayu Berkualitas Tinggi untuk Kebutuhan Anda
        </p>
      </div>
    </section>
  );
}
