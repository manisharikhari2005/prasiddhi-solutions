import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between border-b border-(--border)  px-6 py-3 text-sm text-(--muted)">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <MapPin size={16} />
          <span>578 Street 40, Delhi, India</span>
        </span>

        <span className="flex items-center gap-2">
          <Phone size={16} />
          <span>+9990100424</span>
        </span>

        <span className="flex items-center gap-2">
          <Mail size={16} />
          <span>info@prasiddhisolutions.com</span>
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
