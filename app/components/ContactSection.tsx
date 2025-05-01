// app/components/ContactSection.tsx

import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Our Location
        </h2>

        {/* Container with Flex for Left and Right alignment */}
        <div className="flex justify-between items-start space-x-8">
          {/* Google Maps Embed */}
          <div className="flex-1">
            <iframe
              src="https://maps.google.com/maps?q=Kantor+wali+nagari+aua+kuniang&output=embed"
              width="100%" // Make map take full width
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 space-y-6">
            {/* WhatsApp */}
            <p className="text-lg text-gray-700 flex items-center space-x-4">
              <FaWhatsapp size={30} color="green" />
              <span className="text-sm text-gray-600">+6281234565678</span>
            </p>

            {/* Instagram */}
            <p className="text-lg text-gray-700 flex items-center space-x-4">
              <FaInstagram size={30} color="green" />
              <span className="text-sm text-gray-600">@busindoadipratama</span>
            </p>

            {/* Alamat */}
            <p className="text-lg text-gray-700 flex items-center space-x-4">
              <FaMapMarkerAlt size={30} color="green" />
              <span className="text-sm text-gray-600">
                4V69+R4V, Unnamed Rd, Aua Kuniang, Kec. Pasaman, Kabupaten
                Pasaman Barat, Sumatera Barat 26566, Indonesia
              </span>
            </p>

            {/* Link ke Google Maps */}
            <a
              href="https://www.google.com/maps/place/Kantor+Wali+Nagari+Aua+Kuniang/@0.1121213,99.8652355,17z/data=!3m1!4b1!4m6!3m5!1s0x302a7d07d0628c8f:0x81d3a02edb5d2bf2!8m2!3d0.1121213!4d99.8678104!16s%2Fg%2F11cmbgdff0?hl=id&entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-800 transition duration-300 shadow-lg hover:cursor-pointer">
                Open in Google Maps
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
