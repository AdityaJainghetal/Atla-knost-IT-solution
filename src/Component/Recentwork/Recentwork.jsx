

import React, { useCallback, useMemo, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

// Images (unchanged)
import img1 from "../Mobile/img/newimage1.jpg";
import img2 from "../Mobile/img/newimage4.jpg";
import img3 from "../Mobile/img/Generatedimage.png";
import img4 from "../Mobile/img/generatedimage2.jpg";
import img5 from "../Mobile/img/generatedimage4.jpg";
import img6 from "../Mobile/img/newimage2.jpg";
import img7 from "../Mobile/img/recentiamge2.jpg";
import img8 from "../Mobile/img/newimage3.jpg";
import img9 from "../Mobile/img/recentimage2.jpg";

const portfolioItems = [
  {
    id: "1561",
    title: "Sameer Tent House",
    categories: ["Consultancy", "Global Business", "Industrial", "UI/UX"],
    image: img1,
    link: "https://www.sameertenthouse.com",
  },
  {
    id: "1554",
    title: "Balaji Events",
    categories: ["Consultancy", "Corporate", "Global Business", "UI/UX"],
    image: img2,
    link: "https://grand-sameer-project-e4z5.vercel.app/",
  },
  {
    id: "1541",
    title: "FirstMeridian",
    categories: ["Consultancy", "Resourcing"],
    image: img3,
    link: "https://firstmeridian.com",
  },
  {
    id: "1533",
    title: "Balaji Decorators",
    categories: ["Consultancy", "Corporate", "Medical", "SAAS", "Software", "UI/UX"],
    image: img6,
    link: "https://www.balajidecorater.com",
  },
  {
    id: "1522",
    title: "Clanbridge",
    categories: ["Hospitality", "Lifestyle", "Real Estate", "UI/UX"],
    image: img4,
    link: "https://clanbridge.com",
  },
  {
    id: "1477",
    title: "Acutok",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img5,
    link: "https://acutok.com",
  },
  {
    id: "1473",
    title: "IncorpNow",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img8,
    link: "https://www.incorpnow.in/",
  },
  {
    id: "1456",
    title: "Alankaram",
    categories: ["Ecommerce", "Furniture", "Lifestyle"],
    image: img7,
    link: "https://alankaram.in",
  },
  {
    id: "1517",
    title: "Aaalay",
    categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
    image: img9,
    link: "https://aaalay.com",
  },
];

const allCategories = ["All", ...new Set(portfolioItems.flatMap((item) => item.categories))];

export default function RecentWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Simple static background gradient – no animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight">
            OUR{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-600">
              RECENT WORK
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Crafting high-impact digital experiences that drive growth across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-10 md:mb-14">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-5 py-2.5 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider
                border transition-colors duration-300
                ${
                  activeFilter === cat
                    ? "bg-red-600/90 border-red-500 text-white shadow-lg shadow-red-900/50"
                    : "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 pb-6">
          {filteredItems.length === 0 ? (
            <div className="col-span-full text-center py-20 text-gray-400 text-xl">
              No projects match this filter.
            </div>
          ) : (
            filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block break-inside-avoid cursor-pointer pb-4 md:pb-5"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-xl md:rounded-2xl
                    bg-gray-900/40 backdrop-blur-sm
                    border border-gray-800/60
                    shadow-xl shadow-black/50
                    transition-all duration-400
                    hover:shadow-2xl hover:shadow-red-900/30
                    hover:-translate-y-1.5
                  `}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10" />
                    <div
                      className={`
                        absolute inset-0 z-20
                        bg-black/30 backdrop-blur-sm
                        opacity-0 group-hover:opacity-60
                        transition-opacity duration-500
                      `}
                    />
                    <div
                      className={`
                        absolute inset-0 z-30
                        flex flex-col items-center justify-center px-5 text-center
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-600 ease-out
                      `}
                    >
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-red-100/90 drop-shadow-lg">
                        {item.categories.slice(0, 3).join(" • ")}
                        {item.categories.length > 3 && " • +more"}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-white/90 text-sm font-medium">
                        <span>View Project</span>
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 pb-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start <span className="text-red-500">Your Project</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            Let's create something powerful together.
          </p>
          <a
            href="/contact"
            className={`
              inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5
              bg-gradient-to-r from-red-600 to-rose-600
              hover:from-red-700 hover:to-rose-700
              rounded-full text-lg md:text-xl font-bold
              shadow-xl shadow-red-900/50
              transition-all duration-400 hover:-translate-y-1.5 hover:shadow-red-800/60
            `}
          >
            Let's Talk
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}