


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ATLAknots from "./Mobile/img/ITLogo.png";

const navItems = [
  { name: "Home", path: "/" },

  {
    name: "About",
    path: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "Recent Work", path: "/recentwork" },
      { name: "Gallery", path: "/gallery" },
    ],
  },

  {
    name: "Service",
    path: "/service",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Digital Marketing",
        path: "/digital-marketing",
        hasDropdown: true,
        dropdownItems: [
          { name: "SEO Services", path: "/seo" },
          { name: "Social Media Marketing", path: "/smm" },
          { name: "Graphic design", path: "/webdeveloper" },
          { name: "Video design", path: "/webdeveloper" },
        ],
      },
      { name: "Software Development", path: "/software" },
      { name: "ERP", path: "/erp" },
    ],
  },

  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Technology", path: "/technology" },
  { name: "Tech News", path: "/technews" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  return (
    <nav className="bg-black/90 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <NavLink to="/" onClick={closeAll}>
            {/* <img src={ATLAknots} alt="Logo" className="h-12 object-contain" /> */}
                          <img
                src={ATLAknots}
                alt="ATLAKnots Logo"
                className="h-4 w-12 md:h-16 md:w-46 lg:h-37 mt-5 lg:w-50 object-contain"
              />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  to={item.path}
                  className="px-4 py-5 text-gray-200 hover:text-red-400 flex items-center gap-1.5 transition-colors duration-150"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </NavLink>

                {/* FIRST LEVEL DROPDOWN */}
                {item.hasDropdown && (
                  <div
                    className="
                      absolute left-0 top-full pt-2
                      w-56 bg-black/95 border border-gray-700 rounded-lg shadow-xl
                      opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      transition-all duration-200 ease-out
                    "
                  >
                    {item.dropdownItems.map((sub) => (
                      <div key={sub.name} className="relative group/sub">
                        <NavLink
                          to={sub.path}
                          className="flex justify-between items-center px-4 py-2.5 text-gray-200 hover:bg-red-900/40 transition-colors duration-150"
                        >
                          {sub.name}
                          {sub.hasDropdown && (
                            <ChevronDown
                              size={14}
                              className="rotate-[-90deg] group-hover/sub:rotate-[-270deg] transition-transform duration-200"
                            />
                          )}
                        </NavLink>

                        {/* SECOND LEVEL DROPDOWN */}
                        {sub.hasDropdown && (
                          <div
                            className="
                              absolute left-full top-0 ml-1 w-52
                              bg-black/95 border border-gray-700 rounded-lg shadow-xl
                              opacity-0 scale-95 pointer-events-none
                              group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto
                              transition-all duration-200 ease-out
                            "
                          >
                            {sub.dropdownItems.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                className="block px-4 py-2.5 text-gray-200 hover:bg-red-900/40 transition-colors duration-150"
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (unchanged) */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center">
                <NavLink
                  to={item.path}
                  onClick={closeAll}
                  className="text-gray-200 py-2"
                >
                  {item.name}
                </NavLink>

                {item.hasDropdown && (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                  >
                    <ChevronDown
                      size={20}
                      className={openDropdown === item.name ? "rotate-180" : ""}
                    />
                  </button>
                )}
              </div>

              {/* FIRST LEVEL MOBILE */}
              {item.hasDropdown && openDropdown === item.name && (
                <div className="pl-4 space-y-1">
                  {item.dropdownItems.map((sub) => (
                    <div key={sub.name}>
                      <div className="flex justify-between items-center">
                        <NavLink
                          to={sub.path}
                          onClick={closeAll}
                          className="text-gray-300 py-2"
                        >
                          {sub.name}
                        </NavLink>

                        {sub.hasDropdown && (
                          <button
                            onClick={() =>
                              setOpenSubDropdown(
                                openSubDropdown === sub.name ? null : sub.name
                              )
                            }
                          >
                            <ChevronDown
                              size={18}
                              className={
                                openSubDropdown === sub.name ? "rotate-180" : ""
                              }
                            />
                          </button>
                        )}
                      </div>

                      {/* SECOND LEVEL MOBILE */}
                      {sub.hasDropdown &&
                        openSubDropdown === sub.name && (
                          <div className="pl-4">
                            {sub.dropdownItems.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                onClick={closeAll}
                                className="block text-gray-400 py-2"
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}