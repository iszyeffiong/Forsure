import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading font-extrabold text-lg">Madonna Int'l Schools</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            A supportive and inspiring environment for young minds to grow, learn, and thrive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-sunshine mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Academics", path: "/academics" },
              { label: "Activities", path: "/activities" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm opacity-70 hover:opacity-100 hover:text-sunshine transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-sunshine mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div className="flex gap-2 items-start">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-sunshine" />
              <span>No 1 Madonna College Way Behind NTA, Asaba, Delta State</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4 shrink-0 text-sunshine" />
              <div className="flex flex-col">
                <a href="tel:+2348038785226" className="hover:text-sunshine">+234 803 878 5226</a>
                <a href="tel:+2348033362933" className="hover:text-sunshine">+234 803 336 2933</a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="h-4 w-4 shrink-0 text-sunshine" />
              <a href="mailto:admin@micasaba.com.ng" className="hover:text-sunshine">admin@micasaba.com.ng</a>
            </div>
            <div className="flex gap-2 items-center">
              <Clock className="h-4 w-4 shrink-0 text-sunshine" />
              <span>8:00 a.m. – 4:00 p.m.</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-heading font-bold text-sunshine mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100063838911987&sk=directory_contact_info", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "X" },
              { icon: MessageCircle, href: "https://wa.me/2348038785226", label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-sunshine hover:text-secondary-foreground transition-all duration-300"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Madonna International Schools. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
