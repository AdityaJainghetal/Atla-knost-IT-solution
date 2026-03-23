



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Pin, 
  BarChart3, 
  Megaphone, 
  Target, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Zap,
  MapPin,
  BarChart,
  Globe,
  DollarSign
} from "lucide-react";

// Updated images (more relevant to social media marketing in 2025–2026 style)
const images = {
  hero: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2000", // Social media analytics + engagement dashboard
  instagram: "https://images.unsplash.com/photo-1611162618071-b39a2ecaca34?auto=format&fit=crop&q=80&w=2000", // Instagram reels / creative content
  platforms: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200", // Social media icons collage
  influencer: "https://images.unsplash.com/photo-1556155099-490a1ba16284?auto=format&fit=crop&q=80&w=2000", // Influencer collaboration
  analytics: "https://images.unsplash.com/photo-1551288049-b1f4d7c3d6e7?auto=format&fit=crop&q=80&w=2000", // Performance analytics
  bhopal: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&q=80&w=2000", // Bhopal city / local vibe
};

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const platforms = [
  { icon: Facebook, title: "Facebook", desc: "We help your business build a strong presence on Facebook through engaging posts, ads, and community interaction." },
  { icon: Instagram, title: "Instagram", desc: "From reels to creatives, we make your brand visually attractive and engaging for today’s audience." },
  { icon: Linkedin, title: "LinkedIn", desc: "Perfect for B2B growth—build professional credibility and connect with the right business audience." },
  { icon: Twitter, title: "Twitter (X)", desc: "Stay relevant with trending conversations and real-time engagement strategies." },
  { icon: Youtube, title: "YouTube", desc: "We help you grow through video marketing, content strategy, and audience engagement." },
  { icon: Pin, title: "Pinterest", desc: "Drive traffic and brand discovery through creative visual content." },
];

const tools = ["Buffer", "Hootsuite", "Sprout Social", "Later", "Canva"];

const advantages = [
  { icon: Target, title: "Social Media Strategy", desc: "We create proper strategies based on your business goals, target audience, platform selection, content plan, and performance tracking." },
  { icon: Zap, title: "Social Media Optimization (SMO)", desc: "We optimize your profiles with the right keywords, content, and posting strategy to increase reach and engagement." },
  { icon: Megaphone, title: "Paid Social Media Promotions", desc: "We run targeted ads on platforms like Facebook, Instagram, and LinkedIn to generate leads and boost visibility." },
  { icon: BarChart3, title: "Performance Marketing", desc: "We focus on results using data, analytics, and testing to improve conversions and ROI." },
  { icon: Users, title: "Influencer Marketing", desc: "We collaborate with relevant influencers to build trust and reach the right audience." },
  { icon: Calendar, title: "Organic Social Media Management", desc: "From content creation to posting and engagement, we manage everything to keep your brand active and growing." },
];

const whyChoose = [
  "Customized strategies for every business",
  "Data-driven campaigns",
  "Transparent reporting",
  "Affordable pricing",
  "Focus on leads, sales, and growth"
];

const areas = [
  "MP Nagar", "Arera Colony", "Shahpura", "New Market", "Bairagarh",
  "Kolar", "Ayodhya Nagar", "Hoshangabad Road", "Gulmohar", "Bawadia Kalan"
];

const faqs = [
  { q: "What social media services do you offer in Bhopal?", a: "We offer complete services including content creation, social media management, paid ads, influencer marketing, and performance tracking." },
  { q: "Why should I hire Atla Knots IT Solutions?", a: "We provide customized strategies, real results, and transparent work focused on your business growth." },
  { q: "Which platforms do you work on?", a: "We work on Facebook, Instagram, LinkedIn, Twitter (X), YouTube, and Pinterest." },
  { q: "How long does it take to see results?", a: "You may start seeing engagement in a few weeks, while leads and conversions improve over time with consistent efforts." },
  { q: "Do you provide local marketing for Bhopal businesses?", a: "Yes, we create geo-targeted campaigns to help you reach your local audience effectively." },
  { q: "Do you handle both organic and paid marketing?", a: "Yes, we combine both strategies for better growth, visibility, and ROI." },
];

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  const [showScrollTop, setShowScrollTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  

  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Social Media Growth Dashboard" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Social Media Marketing Company & Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Bhopal</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-red-400 mb-8">
            Real Engagement. Real Leads. Real Growth.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-red-400 font-semibold">Atla Knots IT Solutions</span>, we are a trusted Social Media Marketing Company in Bhopal focused on building a strong and impactful digital presence for your brand. We understand how important social media is for business growth today, and our expert team creates strategies that actually deliver results — not just likes.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We combine creativity with data to help your brand connect with the right audience across platforms. Whether you're a startup, local business, or growing brand, we provide tailored social media marketing services in Bhopal that bring real engagement, leads, and visibility.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free Strategy Call <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              Free Social Media Audit
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Platforms */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Our Complete <span className="text-red-500">Social Media Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((plat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center"
              >
                <plat.icon className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{plat.title}</h3>
                <p className="text-gray-300">{plat.desc}</p>
              </motion.div>
            ))}
          </div>

      
        </div>
      </section>

      {/* Professional Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
            Professional Social Media <span className="text-red-500">Tools We Use</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-red-900/30 rounded-xl px-8 py-4 text-xl font-semibold"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages / Core Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Advantages of <span className="text-red-500">Atla Knots IT Solutions</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
              >
                <adv.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-center">{adv.title}</h3>
                <p className="text-gray-300 text-center">{adv.desc}</p>
              </motion.div>
            ))}
          </div>

       
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
            Why Bhopal Businesses Choose <span className="text-red-500">Atla Knots IT Solutions</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Atla Knots IT Solutions is a reliable and result-driven social media marketing agency in Bhopal. We focus on creating content and strategies that not only look good but also perform well.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center flex items-center justify-center"
              >
                <CheckCircle2 className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
                <p className="text-lg font-semibold">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-12">
            Areas We Serve in <span className="text-red-500">Bhopal</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-10">
            We provide social media marketing services across all major areas in Bhopal. We work with startups, local shops, clinics, institutes, and established businesses across the city.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-red-950/40 border border-red-800/50 rounded-full px-6 py-3 text-lg font-medium flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-red-400" /> {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-red-900/40 rounded-xl overflow-hidden bg-gray-900/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <span className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 pt-2 text-gray-300 leading-relaxed">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-950/30 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
            Let’s Grow Your Business with <span className="text-red-500">Atla Knots</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Atla Knots IT Solutions is your partner for digital growth. If you want to build a strong social media presence and generate real results, connect with us today.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
          >
            Connect With Us Today <ArrowRight className="w-8 h-8" />
          </motion.button>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 text-lg text-gray-400">
            📞 +91 78696 36070 &nbsp; | &nbsp; support@atlaknots.com
          </motion.p>
        </div>
      </section>

            <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  );
}