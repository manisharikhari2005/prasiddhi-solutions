import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    "Website Design",
    "Web Applications",
    "API & Backend",
    "UI Development",
    "Maintenance",
  ];

  const usefulLinks = [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/prasiddhi/why-choose-us" },
    { name: "Our Team", href: "/prasiddhi/our-team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <footer className="bg-(--primary-dark) text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Prasiddhi Solutions */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            Prasiddhi <span className="text-(--accent)">Solutions</span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-white/70">
            Prasiddhi Solutions – Your Trusted IT & Digital Solutions. We help
            businesses transform their ideas into powerful, scalable, secure and
            easy-to-use digital solutions.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:bg-(--accent) hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="text-lg font-bold">Get In Touch</h2>

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={19} className="mt-1 shrink-0 text-(--accent)" />

              <p className="text-sm leading-6 text-white/70">
                578 Street 40,
                <br />
                Delhi, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={19} className="shrink-0 text-(--accent)" />

              <a
                href="mailto:info@prasiddhisolutions.com"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                info@prasiddhisolutions.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={19} className="shrink-0 text-(--accent)" />

              <a
                href="tel:9990100424"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                9990100424
              </a>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-bold">Our Services</h2>

          <div className="mt-6 flex flex-col gap-3">
            {services.map((service) => (
              <Link
                key={service}
                href="/services"
                className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="text-(--accent) transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold">Useful Links</h2>

          <div className="mt-6 flex flex-col gap-3">
            {usefulLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="text-(--accent) transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-sm text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="font-medium text-white hover:text-(--accent)"
            >
              Prasiddhi Solutions
            </Link>
            . All Rights Reserved.
          </p>

          <p>
            Designed by{" "}
            <Link
              href="/"
              className="font-medium text-white hover:text-(--accent)"
            >
              Prasiddhi Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
