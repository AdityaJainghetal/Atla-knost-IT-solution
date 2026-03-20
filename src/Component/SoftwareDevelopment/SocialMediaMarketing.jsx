import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Pin,              // ← replaced Pinterest with Pin
  BarChart3, 
  Megaphone, 
  Target, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Zap 
} from "lucide-react";

// Selected high-quality images
const images = {
  hero: "https://multipurposethemes.com/wp-content/uploads/2024/10/Dynamic-CRM-Dashboards-for-Tracking-Leads-Sales-and-Customer-Data.jpg", // Modern analytics dashboard
  instagram: "https://www.plannthat.com/wp-content/uploads/2023/12/How-To-Harness-Instagrams-New-Content-Creation-Tools-To-Streamline-Your-Social-Media-Marketing-2.png", // Instagram reels/content
  platforms: "https://thumbs.dreamstime.com/b/social-media-network-logo-icon-set-facebook-instagram-youtube-twitter-snapchat-whatsapp-linkedin-pinterest-collection-popular-401808301.jpg", // Platform icons
  influencer: "https://media.sproutsocial.com/uploads/2024/01/Rethinking-the-brand-influencer-relationship-Final.jpg", // Influencer collaboration
  analytics: "https://media.sproutsocial.com/uploads/2025/05/PI_Analytics_Instagram_Competitors_Report-comp.jpg", // Performance tracking
};

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const platforms = [
  { icon: Facebook, title: "Facebook", desc: "Engaging posts, targeted ads, and community building for maximum reach." },
  { icon: Instagram, title: "Instagram", desc: "Reels, stories, creatives — visual storytelling that captivates audiences." },
  { icon: Linkedin, title: "LinkedIn", desc: "B2B lead generation, professional networking, and thought leadership." },
  { icon: Twitter, title: "Twitter (X)", desc: "Real-time engagement, trending topics, and brand conversations." },
  { icon: Youtube, title: "YouTube", desc: "Video content strategy, SEO optimization, and subscriber growth." },
  { icon: Pin, title: "Pinterest", desc: "Visual discovery, traffic driving pins, and brand inspiration boards." },
];

const advantages = [
  { icon: Target, title: "Custom Social Media Strategy", desc: "Tailored plans aligned with your goals, audience, and platforms." },
  { icon: Zap, title: "Social Media Optimization (SMO)", desc: "Profile optimization, keyword-rich content, and posting schedules for better reach." },
  { icon: Megaphone, title: "Paid Social Promotions", desc: "Targeted ads on Facebook, Instagram, LinkedIn — drive leads & sales." },
  { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven campaigns with A/B testing and ROI-focused optimization." },
  { icon: Users, title: "Influencer Marketing", desc: "Partner with relevant influencers to build trust and expand reach." },
  { icon: Calendar, title: "Organic Social Management", desc: "Full content creation, posting, engagement, and community handling." },
];

const faqs = [
  { q: "What social media services do you offer in Bhopal?", a: "Full suite: content creation, management, paid ads, influencer collaborations, SMO, and analytics." },
  { q: "Why choose Atlas Knots IT Solutions?", a: "Custom strategies, data-backed results, transparent reporting, affordable rates, and focus on leads/sales." },
  { q: "Which platforms do you handle?", a: "Facebook, Instagram, LinkedIn, Twitter (X), YouTube, Pinterest — full coverage." },
  { q: "How long to see results?", a: "Engagement often in weeks; leads/conversions build over 2–6 months with consistency." },
  { q: "Do you do local Bhopal marketing?", a: "Yes — geo-targeted campaigns for areas like MP Nagar, Arera Colony, Kolar, etc." },
  { q: "Organic or paid — which do you do?", a: "Both — combined for maximum visibility, engagement, and ROI." },
];

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Social Media Analytics Dashboard" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
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

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we build powerful social media strategies that connect your brand with the right Bhopal audience — beyond likes to measurable business results.
          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            {["Targeted reach", "Lead generation", "Brand visibility", "Data-driven ROI"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free Strategy Call <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              Free Audit
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Platforms */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Platforms We <span className="text-red-500">Master</span>
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

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.instagram}
            alt="Instagram Content Creation"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
            Our <span className="text-red-500">Core Social Media Services</span>
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

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.influencer}
            alt="Influencer Marketing Collaboration"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
            Why Bhopal Businesses Choose <span className="text-red-500">Atlas Knots</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Local expertise + global standards: customized, transparent, results-focused social media marketing.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {["Custom strategies", "Data & analytics driven", "Transparent monthly reports", "Affordable & scalable", "Lead & sales focused", "Local Bhopal targeting"].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-lg font-bold">{point}</p>
              </motion.div>
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
                  <span className={`text-red-500 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-gray-300">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
            Ready to <span className="text-red-500">Dominate</span> Social Media in Bhopal?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl md:text-2xl text-gray-300 mb-12">
            Let's turn your social presence into real customers and growth — starting today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
          >
            Get Your Free Social Audit →
          </motion.button>
        </div>
      </section>
    </div>
  );
}