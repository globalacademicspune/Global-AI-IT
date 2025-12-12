"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  ArrowUp,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP 3 SECTIONS */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* 1 — LOGO SECTION */}
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/GlobalAIIT-logo.png"
                alt="Global AIIT Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
              <h3 className="text-lg font-bold">Global AIIT</h3>
            </div>

            <p className="text-sm opacity-80 max-w-xs">
              Empowering data professionals with industry-leading education and mentorship.
            </p>
          </div>

          {/* 2 — CONTACT SECTION */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:go.globalacademics.pune@gmail.com"
                  className="hover:opacity-100 opacity-80 transition text-sm"
                >
                  go.globalacademics.pune@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href="https://wa.me/919763616999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-80 transition text-sm"
                >
                  +91 97636 16999 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* 3 — FOLLOW SECTION */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/global-aiit/" target="_blank" className="hover:scale-110 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://youtube.com/@globalacademicspune" target="_blank" className="hover:scale-110 transition">
                <Youtube size={24} />
              </a>
              <a href="https://www.instagram.com/global.aiit" target="_blank" className="hover:scale-110 transition">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/919763616999" target="_blank" className="hover:scale-110 transition">
                <MessageCircleMore size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* ADDRESS TITLE (CENTERED) */}
        <h3 className="text-center text-3xl font-extrabold mb-10 tracking-wide">
            Address
        </h3>


        {/* THREE ADDRESSES BELOW — HORIZONTAL */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Address under Global AIIT */}
          <div className="flex gap-2 max-w-xs mx-auto md:mx-0">
            <MapPin size={20} className="mt-1 flex-shrink-0" />
            <p className="text-sm leading-relaxed">
              Global AIIT<br />
              Space Corner, Salunke Vihar Road, Kedari Nagar Rd, Clover Village, Wanowrie<br />
              Maharashtra, Pune 411040
            </p>
          </div>

          {/* Address under Contact Us */}
          <div className="flex gap-2 max-w-xs mx-auto md:mx-0">
            <MapPin size={20} className="mt-1 flex-shrink-0" />
            <p className="text-sm leading-relaxed">
              Global AIIT Training Center<br />
              S. No. 77, Cluster C, 3rd Floor, Wing 1, EON Free Zone, Kharadi<br />
              Maharashtra, Pune 411014
            </p>
          </div>

          {/* Address under Follow Us */}
          <div className="flex gap-2 max-w-xs mx-auto md:mx-0">
            <MapPin size={20} className="mt-1 flex-shrink-0" />
            <p className="text-sm leading-relaxed">
              Global AIIT<br />
              BLOCK-B, Hobli, Marathahalli - Sarjapur Outer Ring Rd, Devarabisanahalli, Varthur<br />
              Karnataka, Bengaluru 560103
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-4">
            <p>© 2025 Global AIIT. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/about" className="hover:opacity-100 transition">
                About
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:opacity-100 transition flex items-center gap-1"
              >
                Back to Top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
