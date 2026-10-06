import { MapPin, Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between border-b border-(--border)  px-6 py-3 text-sm text-(--muted) ">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 hover:text-(--primary-dark)">
          <MapPin size={16} />
          <span>578 Street 40, Delhi, India</span>
        </span>

        <span className="flex items-center gap-2 hover:text-(--primary-dark)">
          <Phone size={16} />
          <span>+9990100424</span>
        </span>

        <span className="flex items-center gap-2 hover:text-(--primary-dark)">
          <Mail size={16} />
          <span>info@prasiddhisolutions.com</span>
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-(--primary-dark)">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-(--primary-dark)">
          <FaFacebookF />
        </a>

        <a href="#" className="hover:text-(--primary-dark)">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-(--primary-dark)">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-(--primary-dark)">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
