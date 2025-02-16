import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                width={140}
                height={32}
                alt="Younitech Logo"
                src="/logo-black.png"
                className="h-[56px] w-auto"
              />
            </Link>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-600">
              Younitech is een softwarebedrijf gespecialiseerd in
              app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt
              zich door oprechte en eerlijke bedrijfsvoering, met aandacht voor
              maatschappelijke belangen en kansen voor werknemers, zonder dat
              expliciet uit te dragen. Younitech denkt contrarian en kiest voor
              een unieke aanpak in een wereld vol concurrentie.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:085-2031520"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Phone className="h-5 w-5" />
                <span>085-203 15 20</span>
              </a>
              <a
                href="mailto:Info@younitech.nl"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                <span>Info@younitech.nl</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Diensten</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/app-ontwikkeling"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    App ontwikkeling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/branding"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketingsdiensten"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Marketingsdiensten
                  </Link>
                </li>
                <li>
                  <Link
                    href="/website-builder"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Website builder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Hulp en Ondersteuning
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/veelgestelde-vragen"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Veelgestelde Vragen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Neem Contact Op
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ondersteuning"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Ondersteuning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bronnen</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/gidsen-en-bronnen"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Gidsen en Bronnen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hulpmiddelen"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Hulpmiddelen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ondersteuning"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Ondersteuning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 younitech. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
