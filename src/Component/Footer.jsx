import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import ATLAknots from "./Mobile/img/ITLogo.png";

// ✅ Social Media Links Component
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-red-500 transition-all hover:scale-110 duration-300 cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
    >
      {icon}
    </a>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // ✅ Handle footer link navigation with scroll to top
  const handleFooterLink = (e, path) => {
    if (location.pathname === path) {
      // Same page → scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page → let Link handle navigation, then scroll
      setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Recent Work", path: "/recentwork" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      category: "Digital Marketing",
      items: [
        { name: "SEO Services", path: "/seo" },
        { name: "Social Media Marketing", path: "/socialmediamarketing" },
        { name: "Paid Advertisement", path: "/paidadv" },
        { name: "Graphic Design", path: "/graphics" },
        { name: "Local Marketing", path: "/localmarketing" },
      ],
    },
    {
      category: "Development",
      items: [
        { name: "Software Development", path: "/software" },
        { name: "Mobile App Development", path: "/mobiledevelopment" },
        { name: "E-commerce Development", path: "/ecommercedevelopment" },
        { name: "Custom ERP Software", path: "/erpdevelopment" },
        { name: "Cloud Solutions", path: "/cloudsolutions" },
        { name: "AI & Machine Learning", path: "/ai-mlservice" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 border-t border-red-900/30 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={ATLAknots}
              alt="ATLAKnots Logo"
              className="h-12 w-[200px] md:h-16 md:w-[260px] lg:h-20 lg:w-[320px] mt-2 object-contain"
            />

            <div className="flex gap-6 mt-8">
              <SocialLink
                href="https://www.facebook.com/atlaknots"
                icon={<Facebook size={22} />}
                label="Facebook"
              />
              <SocialLink
                href="https://twitter.com/atlaknots"
                icon={<Twitter size={22} />}
                label="Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/company/atlaknots"
                icon={<Linkedin size={22} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/atlaknots"
                icon={<Instagram size={22} />}
                label="Instagram"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={(e) => handleFooterLink(e, item.path)}
                    className="text-gray-400 hover:text-red-400 transition-all hover:translate-x-1 inline-block duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {services.map((group) => (
                <div key={group.category}>
                  <h5 className="text-red-400 font-medium text-xs uppercase tracking-widest mb-3">
                    {group.category}
                  </h5>
                  <ul className="space-y-2.5 text-sm">
                    {group.items.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          onClick={(e) => handleFooterLink(e, service.path)}
                          className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block duration-200"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 mt-0.5 shrink-0" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <a
                  href="tel:+917869636070"
                  className="hover:text-red-400 transition-colors"
                >
                  +91 78696 36070
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <a
                  href="mailto:support@atlaknots.com"
                  className="hover:text-red-400 transition-colors break-all"
                >
                  support@atlaknots.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-red-900/20 py-6 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} ATLA Knots IT Solutions. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/privacypolicy"
              onClick={(e) => handleFooterLink(e, "/privacypolicy")}
              className="hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsofservice"
              onClick={(e) => handleFooterLink(e, "/termsofservice")}
              className="hover:text-red-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookiepolicy"
              onClick={(e) => handleFooterLink(e, "/cookiepolicy")}
              className="hover:text-red-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
