// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Brain, Bot, LineChart, MessageSquare, Sparkles, 
//   Search, Zap, ShieldCheck, Database, ArrowRight, 
//   CheckCircle2, Users, Building2, Hospital, ShoppingCart, 
//   Landmark, GraduationCap, Home 
// } from "lucide-react";

// // Use selected high-quality images from searches
// const images = {
//   hero: "https://cdn.dribbble.com/userupload/44332008/file/e8f3602694b9c67cf4dd1d12f13ce1ae.png", // Futuristic AI Dashboard [image:0]
//   neural: "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg", // Neural network [image:1]
//   analytics: "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg", // Predictive analytics wave [image:7]
//   chatbot: "https://cdn.dribbble.com/userupload/43417415/file/original-3a4c6454500a9fdfa0fc839bc321c12c.jpg?resize=752x&vertical=center", // AI Chat UI [image:4]
//   recommendation: "https://cdn.prod.website-files.com/64c231f464b91d6bd0303294/674e92f1bbfbcacfd576aefe_AD_4nXcsfCL2ryHHhRfH1QH-qgxeG1YopDS-0AE007vH0AaJeWyWhPcwmG6TmIwqa3etcDsnE2GU642XJYMch1JHRsAbh6XZymeO5Xd_8apUM13l0LUpJ4o41oG554XD6BnWTIAV_ax2tg.png", // Recommendation wheel [image:10]
// };

// const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// const services = [
//   { icon: Zap, title: "AI-Based Automation", desc: "Automate customer support, data entry, workflows — save time & reduce costs." },
//   { icon: LineChart, title: "Predictive Analytics", desc: "Forecast sales, trends, demand using ML models on historical data." },
//   { icon: MessageSquare, title: "Chatbot Development", desc: "Intelligent AI chatbots for instant responses and 24/7 engagement." },
//   { icon: Database, title: "Data Analysis & Insights", desc: "Process big data to uncover actionable business intelligence." },
//   { icon: Sparkles, title: "Recommendation Systems", desc: "Personalized product/service suggestions to boost sales & retention." },
//   { icon: Brain, title: "Image & Speech Recognition", desc: "Advanced recognition for security, automation, and interactions." },
// ];

// const industries = [
//   { icon: Hospital, title: "Healthcare", desc: "Patient prediction, diagnostics support, personalized care." },
//   { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, recommendations, inventory optimization." },
//   { icon: Landmark, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading." },
//   { icon: GraduationCap, title: "Education", desc: "Adaptive learning, student performance prediction." },
//   { icon: Home, title: "Real Estate", desc: "Property valuation, buyer matching, market trend analysis." },
//   { icon: Users, title: "Startups & Small Businesses", desc: "Affordable AI tools for growth and efficiency." },
// ];

// const faqs = [
//   { q: "What are AI & Machine Learning services?", a: "They help businesses leverage data and automation to streamline operations, enhance decisions, and drive efficiency." },
//   { q: "How can AI help my business?", a: "AI reduces manual effort, improves customer experiences, and boosts decision accuracy with predictive insights." },
//   { q: "Do I need technical knowledge to use AI solutions?", a: "No — we deliver user-friendly, ready-to-use solutions for non-technical teams." },
//   { q: "How long does it take to implement AI solutions?", a: "Varies by scope; basic automation/chatbots in weeks, complex models in months." },
//   { q: "Are AI solutions expensive?", a: "We provide cost-effective, scalable options tailored to your budget and needs." },
// ];

// export default function AIServices() {
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img src={images.hero} alt="Futuristic AI Dashboard" className="w-full h-full object-cover opacity-30 brightness-50" loading="lazy" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
//             AI & Machine Learning Services in{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Bhopal</span>
//           </motion.h1>

//           <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-red-400 mb-8">
//             Turn Data into Decisions — Automate, Predict, Win
//           </motion.p>

//           <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//             At <span className="text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we deliver powerful AI/ML solutions that automate processes, uncover insights, and give your business a competitive edge in Bhopal and beyond.
//           </motion.p>

//           <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
//             {["Smarter decisions", "Automation savings", "Personalized experiences", "Predictive power"].map((item) => (
//               <li key={item} className="flex items-center gap-2">
//                 <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get Free AI Consultation <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               Discuss Your Project
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Services */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-12">
//             Our <span className="text-red-500">AI & ML Services</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center"
//               >
//                 <service.icon className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-gray-300">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.analytics}
//             alt="Predictive Analytics Dashboard"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       </section>

//       {/* Why Choose Us + Features */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className="text-4xl md:text-6xl font-black mb-8">
//               Why <span className="text-red-500">Atlas Knots</span> for AI in Bhopal?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Trusted local partner delivering customized, outcome-focused AI solutions with latest tech and affordable pricing.
//             </p>
//             <ul className="space-y-4 text-lg">
//               {["Custom-built for your needs", "Expert Bhopal-based team", "Cutting-edge tools", "Real ROI focus", "Secure & scalable"].map((point) => (
//                 <li key={point} className="flex items-center gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" /> {point}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.img variants={fadeInUp} src={images.neural} alt="Neural Network Visualization" className="rounded-2xl shadow-2xl border border-red-900/30 w-full" loading="lazy" />
//         </motion.div>
        
//       </section>

//       {/* Industries */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-12">
//             Industries We <span className="text-red-500">Empower</span> with AI
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((ind, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
//               >
//                 <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
//                 <p className="text-lg text-gray-300">{ind.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-center mb-16">
//             Frequently Asked <span className="text-red-500">Questions</span>
//           </motion.h2>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="border border-red-900/40 rounded-xl overflow-hidden"
//               >
//                 <button
//                   onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                   className="w-full px-8 py-6 text-left flex justify-between items-center bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">{faq.q}</span>
//                   <span className={`text-red-500 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
//                 </button>
//                 {openFaq === idx && (
//                   <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="px-8 pb-6 text-gray-300">
//                     {faq.a}
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
//             Ready to <span className="text-red-500">Transform</span> Your Business with AI?
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12">
//             From automation to predictive insights — let's build AI that drives real growth for your Bhopal business.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//           >
//             Start Your AI Journey Today →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, Bot,Users, LineChart, MessageSquare, Sparkles, 
  Zap, Database, ArrowRight, CheckCircle2, 
  Hospital, ShoppingCart, Landmark, GraduationCap, Home 
} from "lucide-react";

// High-quality images (you can replace with your own branded shots later)
const images = {
  hero: "https://cdn.dribbble.com/userupload/44332008/file/e8f3602694b9c67cf4dd1d12f13ce1ae.png", // Futuristic AI Dashboard
  neural: "https://content.presentermedia.com/files/clipart/00031000/31269/neural_network_visualization_800_wht.jpg", // Neural network
  analytics: "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg", // Predictive analytics
  chatbot: "https://cdn.dribbble.com/userupload/43417415/file/original-3a4c6454500a9fdfa0fc839bc321c12c.jpg?resize=752x&vertical=center", // AI Chat UI
  recommendation: "https://cdn.prod.website-files.com/64c231f464b91d6bd0303294/674e92f1bbfbcacfd576aefe_AD_4nXcsfCL2ryHHhRfH1QH-qgxeG1YopDS-0AE007vH0AaJeWyWhPcwmG6TmIwqa3etcDsnE2GU642XJYMch1JHRsAbh6XZymeO5Xd_8apUM13l0LUpJ4o41oG554XD6BnWTIAV_ax2tg.png", // Recommendation system
};

const fadeInUp = { 
  hidden: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
};

const staggerContainer = { 
  hidden: {}, 
  visible: { transition: { staggerChildren: 0.15 } } 
};

const services = [
  { icon: Zap, title: "AI-Based Automation", desc: "Automate customer support, data entry, workflows — save time & reduce costs." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Forecast sales, trends, demand using ML models on historical data." },
  { icon: MessageSquare, title: "Chatbot Development", desc: "Intelligent AI chatbots for instant responses and 24/7 engagement." },
  { icon: Database, title: "Data Analysis & Insights", desc: "Process big data to uncover actionable business intelligence." },
  { icon: Sparkles, title: "Recommendation Systems", desc: "Personalized product/service suggestions to boost sales & retention." },
  { icon: Brain, title: "Image & Speech Recognition", desc: "Advanced recognition for security, automation, and interactions." },
];

const industries = [
  { icon: Hospital, title: "Healthcare", desc: "Patient prediction, diagnostics support, personalized care." },
  { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Demand forecasting, recommendations, inventory optimization." },
  { icon: Landmark, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading." },
  { icon: GraduationCap, title: "Education", desc: "Adaptive learning, student performance prediction." },
  { icon: Home, title: "Real Estate", desc: "Property valuation, buyer matching, market trend analysis." },
  { icon: Users, title: "Startups & Small Businesses", desc: "Affordable AI tools for growth and efficiency." },
];

const faqs = [
  { q: "What are AI & Machine Learning services?", a: "They help businesses leverage data and automation to streamline operations, enhance decisions, and drive efficiency." },
  { q: "How can AI help my business?", a: "AI reduces manual effort, improves customer experiences, and boosts decision accuracy with predictive insights." },
  { q: "Do I need technical knowledge to use AI solutions?", a: "No — we deliver user-friendly, ready-to-use solutions for non-technical teams." },
  { q: "How long does it take to implement AI solutions?", a: "Varies by scope; basic automation/chatbots in weeks, complex models in months." },
  { q: "Are AI solutions expensive?", a: "We provide cost-effective, scalable options tailored to your budget and needs." },
];

export default function AIServices() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Futuristic AI Dashboard" 
            className="w-full h-full object-cover opacity-30 brightness-50" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            AI & Machine Learning Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Bhopal
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="text-2xl md:text-4xl font-bold text-red-400 mb-8"
          >
            Turn Data into Decisions — Automate, Predict, Win
          </motion.p>

          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            At <span className="text-red-400 font-semibold">Atlas Knots IT Solutions</span>, we deliver powerful AI/ML solutions that automate processes, uncover insights, and give your business a competitive edge in Bhopal and beyond.
          </motion.p>

          <motion.ul 
            variants={fadeInUp} 
            className="flex flex-wrap justify-center gap-6 mb-12 text-lg"
          >
            {["Smarter decisions", "Automation savings", "Personalized experiences", "Predictive power"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-red-500" /> {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get Free AI Consultation 
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              Discuss Your Project
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Our <span className="text-red-500">AI & ML Services</span>
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-8 md:p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group flex flex-col items-center text-center min-h-[260px]"
              >
                <service.icon className="w-14 h-14 md:w-16 md:h-16 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 text-base">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.analytics}
            alt="Predictive Analytics Dashboard"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mt-16 max-w-4xl w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              Why <span className="text-red-500">Atlas Knots</span> for AI in Bhopal?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Trusted local partner delivering customized, outcome-focused AI solutions with latest tech and affordable pricing.
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-4 text-lg">
              {[
                "Custom-built for your specific needs",
                "Expert team based right here in Bhopal",
                "Using the latest AI tools & frameworks",
                "Focus on measurable business ROI",
                "Secure, scalable, and future-ready architecture"
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" /> 
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.neural}
            alt="Neural Network Visualization"
            className="rounded-2xl shadow-2xl border border-red-900/30 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Industries We <span className="text-red-500">Empower</span> with AI
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
              >
                <ind.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
                <p className="text-lg text-gray-300">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
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
                  type="button"
                  role="button"
                  aria-expanded={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold pr-4">{faq.q}</span>
                  <span className={`text-red-500 text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 md:px-8 text-gray-300 text-base leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/70">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Ready to <span className="text-red-500">Transform</span> Your Business with AI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            From intelligent automation to powerful predictive insights — let's build AI that drives real growth for your business in Bhopal.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
          >
            Start Your AI Journey Today →
          </motion.button>
        </div>
      </section>
    </div>
  );
}