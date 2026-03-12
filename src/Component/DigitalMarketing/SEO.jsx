// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Search, BarChart3, Globe, MapPin, Link, FileText, Zap } from "lucide-react";

// // Images from search (you can replace with your own imports if needed)
// const seoDashboard = "https://www.databloo.com/wp-content/uploads/2024/09/Data-Bloo-Custom-Template-with-GA4-Google-Ads-Facebook-Ads-GA4-2.png"; // analytics dashboard
// const seoTeam = "https://img.freepik.com/premium-photo/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-63124.jpg"; // team working
// const googleSERP = "https://yoast.com/app/uploads/2018/02/cody-gakpo-google-search-result-scaled.jpg"; // Google search results example
// const localSEO = "https://www.seoguruatlanta.com/wp-content/uploads/2020/03/ultimate-local-business-marketing-tool-guide-to-google-my-business.png"; // Google Maps/local pin

// const seoServices = [
//   { icon: Zap, title: "Technical SEO Audit", desc: "Detailed website audit to fix issues affecting rankings and performance." },
//   { icon: FileText, title: "On-Page SEO", desc: "Optimize content, meta tags, headings, structure, and internal linking." },
//   { icon: Link, title: "Off-Page SEO", desc: "Build authority with high-quality backlinks and trusted mentions." },
//   { icon: MapPin, title: "Local SEO", desc: "Rank in local searches and Google Maps to attract nearby customers." },
//   { icon: Search, title: "Keyword Research & Strategy", desc: "Find high-value keywords your customers are actually searching for." },
//   { icon: Globe, title: "E-commerce SEO", desc: "Optimize product & category pages to boost visibility and online sales." },
// ];

// const packages = [
//   {
//     name: "Basic Plan",
//     for: "Startups & Small Businesses",
//     features: ["Initial SEO analysis", "On-page optimization", "Keyword research", "Local SEO setup", "Off-page SEO", "Monthly reporting"],
//   },
//   {
//     name: "Advance Plan",
//     for: "Growing Businesses",
//     features: ["SEO audit and strategy", "On-page optimization", "Keyword targeting", "Local SEO optimization", "Content marketing", "Off-page SEO", "Monthly reporting", "Customer support"],
//   },
//   {
//     name: "Pro Plan",
//     for: "Competitive Industries",
//     features: ["Complete SEO strategy", "On-page + technical SEO", "Keyword research and targeting", "Local SEO optimization", "Content marketing", "High-quality backlinks", "Premium SEO reports", "Dedicated support"],
//   },
// ];

// const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

// export default function SEO() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img src={googleSERP} alt="Google search results example" className="w-full h-full object-cover opacity-20 brightness-50" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
//             Best SEO Company in India That Drives{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Traffic & Generates Real Leads</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
//             At <span className="text-red-400 font-semibold">Atlas Knots IT Solution</span>, we focus on real business growth — more qualified traffic, inquiries, calls, and sales — not just rankings.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
//               Let's Talk Growth <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
//               Get Free SEO Audit
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* SEO Services */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
//             Our SEO Services – <span className="text-red-500">Designed to Deliver Results</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {seoServices.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/20 transition-all group"
//               >
//                 <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
//                 <p className="text-gray-300 text-center">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advantages & Dashboard Image */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className="text-4xl md:text-5xl font-black mb-8">Advantages of SEO for Your Business</h2>
//             <ul className="space-y-4 text-lg text-gray-300">
//               {["Higher visibility on search engines", "Increased website traffic", "Stronger brand awareness", "Higher conversion rates", "Long-term business growth"].map((adv, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
//                   <span className="text-red-500 text-2xl">✓</span> {adv}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.img
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={seoDashboard}
//             alt="SEO analytics dashboard showing traffic growth"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
//           />
//         </div>
//       </section>

//       {/* Why Choose Us & Team Image */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             src={seoTeam}
//             alt="Professional SEO team collaborating"
//             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
//           />

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
//             <h2 className="text-4xl md:text-5xl font-black mb-8">Why Choose Atlas Knots for SEO?</h2>
//             <ul className="space-y-6 text-lg">
//               {["White Hat SEO Practices – Long-term results", "Transparent Reporting – Weekly/monthly updates", "Dedicated SEO Team – Specialists + writers + developers", "Proven Experience – Always updated with latest trends"].map((reason, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
//                   <span className="text-red-500 text-3xl font-bold">0{i + 1}</span>
//                   <p>{reason}</p>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </section>

//       {/* Packages */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
//             Our SEO <span className="text-red-500">Packages</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {packages.map((pkg, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600 hover:shadow-xl hover:shadow-red-900/30 transition-all text-center"
//               >
//                 <h3 className="text-3xl font-bold text-red-400 mb-4">{pkg.name}</h3>
//                 <p className="text-gray-400 mb-6">{pkg.for}</p>
//                 <ul className="space-y-3 text-left">
//                   {pkg.features.map((feat, i) => (
//                     <li key={i} className="flex items-center gap-3">
//                       <span className="text-red-500">•</span> {feat}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Local SEO Image & Final CTA */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={localSEO}
//             alt="Local SEO Google Maps optimization"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mb-12 max-w-2xl w-full"
//           />

//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
//             Let’s Talk About <span className="text-red-500">Growth</span> — Not Just Rankings
//           </motion.h2>

//           <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
//             Ready to attract real customers who convert? Connect with us today.
//           </motion.p>

//           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all">
//             Get Your Free SEO Consultation →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart3, Globe, MapPin, Link, FileText, Zap, CheckCircle } from "lucide-react";

// You can replace these with your own image imports or keep the URLs
const images = {
  dashboard: "https://media.whatagraph.com/Data_bloo_s_Google_Search_Console_report_template_6972d36596.png", // SEO analytics dashboard
  team: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/how-seos-the-sales-team-can-drive-business-growth-5f0c9b22e8c6d-1280x720.png", // SEO team collaborating
  serp: "https://www.wordstream.com/wp-content/uploads/2008/12/organic-results-on-the-serp.png", // Google SERP example
  localSEO: "https://zenbrief.com/wp-content/uploads/2022/07/How-To-Use-Google-Business-Profile-For-Local-SEO_-Complete-Guide-to-GBP-ex-GMB.png", // Google Business Profile / Local pins
  ecommerce: "https://searchengineland.com/wp-content/seloads/2025/07/why-e-commerce-matters.png.webp", // E-commerce SEO visibility
};

const seoServices = [
  { icon: Zap, title: "Technical SEO Audit", desc: "Detailed website audit to identify technical problems affecting rankings and performance." },
  { icon: FileText, title: "On-Page SEO", desc: "Optimize structure, content, meta tags, headings, and internal links for better understanding by search engines." },
  { icon: Link, title: "Off-Page SEO", desc: "Build authority through high-quality backlinks, brand mentions, and trusted references." },
  { icon: MapPin, title: "Local SEO", desc: "Rank in local search results and Google Maps to attract nearby customers." },
  { icon: Search, title: "Keyword Research & Strategy", desc: "Identify high-value keywords your potential customers search for and build strong strategies." },
  { icon: Globe, title: "E-commerce SEO", desc: "Optimize product pages, categories, and technical elements to increase visibility and sales." },
];

const packages = [
  {
    name: "Basic Plan",
    desc: "Best for startups and small businesses",
    features: ["Initial SEO analysis", "On-page optimization", "Keyword research", "Local SEO setup", "Off-page SEO", "Monthly reporting"],
  },
  {
    name: "Advance Plan",
    desc: "Best for growing businesses",
    features: ["SEO audit and strategy", "On-page optimization", "Keyword targeting", "Local SEO optimization", "Content marketing", "Off-page SEO", "Monthly reporting", "Customer support"],
  },
  {
    name: "Pro Plan",
    desc: "Best for competitive industries",
    features: ["Complete SEO strategy", "On-page + technical SEO", "Keyword research and targeting", "Local SEO optimization", "Content marketing", "High-quality backlinks", "Premium SEO reports", "Dedicated support"],
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function SEO() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img src={images.serp} alt="Google SERP organic results example" className="w-full h-full object-cover opacity-25 brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Best SEO Company in India That Drives Traffic & Generates{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Real Leads</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            At Atlas Knots IT Solution, we are not just another digital marketing agency using complicated marketing words. We are a team that truly understands how search engines work and how businesses grow online.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
              Let's Talk Growth <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
              Free SEO Audit →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Results Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-10">
            Many promise “Rank #1 on Google.” But the real question is: Will those rankings bring you <span className="text-red-500">real customers</span>?
          </motion.h2>

          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            That’s where we work differently. We focus on results that actually help your business grow:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["More qualified website traffic", "More inquiries and calls", "More real customers and sales"].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-900/60 border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 transition-all"
              >
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <p className="text-xl font-semibold">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our SEO Services – <span className="text-red-500">Designed to Deliver Results</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/20 transition-all group"
              >
                <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages + Dashboard Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Advantages of SEO for Your Business</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Search Engine Optimization helps businesses build a strong online presence and reach customers who are actively searching for their products or services.
            </p>
            <ul className="space-y-4 text-lg">
              {["Higher visibility on search engines", "Increased website traffic", "Stronger brand awareness", "Higher conversion rates", "Long-term business growth"].map((adv, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  {adv}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.dashboard}
            alt="SEO analytics dashboard showing traffic, impressions, clicks and keyword rankings growth"
            className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us + Team Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.team}
            alt="Professional SEO team discussing strategy and growth plans"
            className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
          />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Why Choose Atlas Knots IT Solution for SEO?</h2>
            <div className="space-y-8">
              {[
                { title: "White Hat SEO Practices", desc: "We follow ethical and search-engine-approved techniques that deliver long-term results." },
                { title: "Transparent Reporting", desc: "Weekly and monthly SEO reports so you can clearly track rankings and traffic growth." },
                { title: "Dedicated SEO Team", desc: "Specialists, content writers, and developers working together for your website performance." },
                { title: "Proven SEO Experience", desc: "We stay updated with the latest algorithm changes to keep your business ahead." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5">
                  <div className="text-4xl font-black text-red-500 opacity-70">{`0${i + 1}`}</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our SEO <span className="text-red-500">Packages</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/30 transition-all ${
                  idx === 1 ? "scale-105 border-red-600 shadow-red-900/50" : ""
                }`}
              >
                <h3 className="text-3xl font-black text-red-400 mb-3">{pkg.name}</h3>
                <p className="text-gray-400 mb-6 font-medium">{pkg.desc}</p>
                <ul className="space-y-3 text-left">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local & E-commerce Images + Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.localSEO}
              alt="Google Business Profile optimization for local SEO with map pins"
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover mb-8"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              src={images.ecommerce}
              alt="E-commerce SEO product visibility comparison then vs now"
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
            />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Let’s Talk About <span className="text-red-500">Growth</span> Not Just Rankings
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Ranking on search engines is important, but real success happens when those rankings bring customers who are genuinely interested in your services.
            </p>

            <p className="text-lg text-gray-300 mb-12">
              At Atlas Knots IT Solution, we focus on attracting the right visitors who convert into leads and sales. Connect with us today and start growing your business online.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all w-fit"
            >
              Get Your Free Consultation →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}