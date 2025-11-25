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
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/GlobalAIIT-logo.png"   // <-- Your logo here
                alt="Global AIIT Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
              <h3 className="text-lg font-bold">Global AIIT</h3>
            </div>
            <p className="text-sm opacity-80">
              Empowering data professionals with industry-leading education and mentorship.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:go.globalacademics.pune@gmail.com"
                  className="hover:opacity-100 opacity-80 transition-opacity text-sm"
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
                  className="hover:opacity-100 opacity-80 transition-opacity text-sm"
                >
                  +91 97636 16999 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>

            <div className="flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/global-aiit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-80 transition-opacity hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@globalacademicspune?si=fIvh2KUhrEhCTXAb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-80 transition-opacity hover:scale-110"
                title="YouTube"
              >
                <Youtube size={24} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/global.aiit?utm_source=qr&igsh=NzJqeGVqaDM0a25l"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-80 transition-opacity hover:scale-110"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919763616999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-80 transition-opacity hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircleMore size={24} />
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <div className="flex gap-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p className="text-sm opacity-80">
                Global AIIT, Space Corner, Salunke Vihar Road, Kedari Nagar Rd,
                Clover Village, Wanowrie, Pune, Maharashtra 411040, India
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; 2025 Global AIIT. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/about" className="hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:opacity-100 transition-opacity flex items-center gap-1"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
