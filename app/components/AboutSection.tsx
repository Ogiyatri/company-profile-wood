import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        About Us
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Gambar Kiri (Dua gambar berdampingan) */}
        <div className="flex-1 flex gap-4">
          <div className="flex-1">
            <Image
              src="/images/Gambar4.jpeg" // Ganti dengan gambar kiri
              alt="About Us Left"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/images/Gambar3.jpeg" // Ganti dengan gambar kanan
              alt="About Us Right"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Teks Kanan */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Precision In Every Grain, Commitment In Every Step
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            At CV. Toba Wood Indo Perkasa, we are dedicated to delivering
            premium hardwood products with a focus on precision and quality. Our
            attention to detail ensures that each product meets the highest
            standards. With years of experience, we are your trusted partner for
            reliable and affordable solutions.
          </p>
          <Link href="/about">
            <button className="inline-block bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
