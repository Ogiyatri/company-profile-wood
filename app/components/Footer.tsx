// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5B3926] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Copyright */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} PT. Busindo Adi Pratama. All rights
          reserved.
        </p>

        {/* Social Media (optional, bisa dihapus kalau tidak mau) */}
        <div className="flex space-x-4">
          {/* Contoh icon-link dummy */}
          <Link href="#" aria-label="Facebook" className="hover:text-gray-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22 12a10 10 0 1 0-11.9 9.8v-7H8v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.3c-1.1 0-1.4.7-1.4 1.4V12h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
