// app/components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Kontak Kami</h2>
        <div className="text-center text-gray-700 space-y-4">
          <p>
            <strong>Alamat:</strong> Jl. Contoh No.123, Kota, Provinsi
          </p>
          <p>
            <strong>Telepon:</strong> (021) 123-4567
          </p>
          <p>
            <strong>Email:</strong> busindoadipratama@gmail.com
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=" // Ganti src mapsnya dengan lokasi perusahaanmu
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
