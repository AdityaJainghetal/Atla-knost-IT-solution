



// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import ATLAknots from "./Mobile/img/ITLogo.png";

// // Social Link Component
// function SocialLink({ href, icon, label }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="text-gray-400 hover:text-red-500 transition-all hover:scale-110"
//     >
//       {icon}
//     </a>
//   );
// }

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const services = [
//     {
//       category: "Digital Marketing",
//       items: [
//         { name: "SEO Services", path: "/seo" },
//         { name: "Social Media Marketing", path: "/socialmediamarketing" },
//         { name: "Paid Advertisement", path: "/paidadv" },
//         { name: "Graphic Design", path: "/graphicdesign" },
//         { name: "Local Marketing", path: "/localmarketing" },
//       ],
//     },
//     {
//       category: "Development",
//       items: [
//         { name: "Software Development", path: "/software" },
//         { name: "Mobile App Development", path: "/mobiledevelopment" },
//         { name: "E-commerce Development", path: "/ecommercedevelopment" },
//         { name: "Custom ERP Software", path: "/erpdevelopment" },
//         { name: "Cloud Solutions", path: "/cloudsolutions" },
//         { name: "AI & Machine Learning", path: "/ai-mlservice" },
//       ],
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-black to-zinc-950 border-t border-red-900/30 text-gray-400">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

//           {/* Brand Section */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <img
//                 src={ATLAknots}
//                 alt="ATLA Knots Logo"
//                 className="h-10 w-auto object-contain"
//               />
//               <h3 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
//                 ATLA Knots
//               </h3>
//             </div>
//             <p className="text-sm leading-relaxed text-gray-400 max-w-[260px]">
//               Modern IT services &amp; software development company.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-5 mt-6">
//               <SocialLink
//                 href="https://www.facebook.com/people/Atla-Knots/61585771087389"
//                 icon={<Facebook size={20} />}
//                 label="Facebook"
//               />
//               <SocialLink
//                 href="https://twitter.com/atlaknotssolutions" // Update if you have exact handle
//                 icon={<Twitter size={20} />}
//                 label="Twitter / X"
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/in/atla-knots-solutions-756702394"
//                 icon={<Linkedin size={20} />}
//                 label="LinkedIn"
//               />
//               <SocialLink
//                 href="https://www.instagram.com/atlaknotssolutions"
//                 icon={<Instagram size={20} />}
//                 label="Instagram"
//               />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5 text-sm">
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div className="lg:col-span-2">
//             <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
//               Our Services
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
//               {services.map((group) => (
//                 <div key={group.category}>
//                   <h5 className="text-red-400 font-medium text-xs uppercase tracking-widest mb-3">
//                     {group.category}
//                   </h5>
//                   <ul className="space-y-2 text-sm">
//                     {group.items.map((service) => (
//                       <li key={service.name}>
//                         <Link
//                           to={service.path}
//                           className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block"
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
//               Contact Us
//             </h4>
//             <ul className="space-y-4 text-sm">
//               <li className="flex items-start gap-3">
//                 <MapPin size={18} className="text-red-500 mt-0.5 shrink-0" />
//                 <span>Bhopal, Madhya Pradesh, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={18} className="text-red-500 shrink-0" />
//                 <a href="tel:+917869636070" className="hover:text-red-400">
//                   +91 78696 36070
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={18} className="text-red-500 shrink-0" />
//                 <a
//                   href="mailto:support@atlaknots.com"
//                   className="hover:text-red-400 break-all"
//                 >
//                   support@atlaknots.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-red-900/20 py-6 text-center text-xs text-gray-500">
//         <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
//           <p>
//             © {currentYear} ATLA Knots IT Solution. All rights reserved.
//           </p>
//           <div className="flex flex-wrap gap-6 justify-center">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="hover:text-red-400 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";   // ← Make sure this is imported
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

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-red-500 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },        // ← Fixed: was "/services"
    { name: "Recent Work", path: "/recentwork" },  // ← Better than "/projects"
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      category: "Digital Marketing",
      items: [
        { name: "SEO Services", path: "/seo" },
        { name: "Social Media Marketing", path: "/socialmediamarketing" },
        { name: "Paid Advertisement", path: "/paidadv" },
        { name: "Graphic Design", path: "/graphics" },           // ← Fixed: was "/graphicdesign"
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

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ATLAknots}
                alt="ATLA Knots Logo"
                className="h-10 w-auto object-contain"
              />
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
                ATLA Knots
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-[260px]">
              Modern IT services &amp; software development company.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6">
              <SocialLink
                href="https://www.facebook.com/people/Atla-Knots/61585771087389"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
              <SocialLink
                href="https://twitter.com/atlaknotssolutions"
                icon={<Twitter size={20} />}
                label="Twitter / X"
              />
              <SocialLink
                href="https://www.linkedin.com/in/atla-knots-solutions-756702394"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/atlaknotssolutions"
                icon={<Instagram size={20} />}
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
                    className="hover:text-red-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {services.map((group) => (
                <div key={group.category}>
                  <h5 className="text-red-400 font-medium text-xs uppercase tracking-widest mb-3">
                    {group.category}
                  </h5>
                  <ul className="space-y-2 text-sm">
                    {group.items.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block"
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

          {/* Contact Us */}
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
                <a href="tel:+917869636070" className="hover:text-red-400">
                  +91 78696 36070
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <a
                  href="mailto:support@atlaknots.com"
                  className="hover:text-red-400 break-all"
                >
                  support@atlaknots.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Fixed with proper Links */}
      <div className="border-t border-red-900/20 py-6 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            © {currentYear} ATLA Knots IT Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/privacypolicy" className="hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/termsofservice" className="hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookiepolicy" className="hover:text-red-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;