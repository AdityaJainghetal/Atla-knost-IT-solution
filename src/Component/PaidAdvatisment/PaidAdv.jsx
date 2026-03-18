

// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ArrowRight, Target, BarChart3, TrendingUp, Megaphone, Repeat, Youtube, ChevronDown } from 'lucide-react';

// // // Updated high-quality, relevant images (professional marketing / ads focused)
// // const carouselImages = [
// //   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90',    // Team collaborating on campaigns
// //   'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90',    // Growth charts / ROI success
// //   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90',    // Strategy planning / ads funnel
// // ];

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.2 } },
// // };

// // const faqData = [
// //   {
// //     question: "Why is Atla Knots the best paid advertising agency in Bhopal?",
// //     answer: "Because we focus on ROI, not just clicks. Our campaigns are data-driven and designed to generate real business results."
// //   },
// //   {
// //     question: "What platforms do you run ads on?",
// //     answer: "We run ads on Google, Facebook, Instagram, YouTube, and other performance platforms."
// //   },
// //   {
// //     question: "How do you ensure better ad performance?",
// //     answer: "Through continuous optimization, A/B testing, audience targeting, and real-time data analysis."
// //   },
// //   {
// //     question: "Can you help small businesses generate leads?",
// //     answer: "Yes, we specialize in lead generation campaigns for startups and small businesses with budget-friendly strategies."
// //   },
// //   {
// //     question: "How soon can I see results?",
// //     answer: "You can start seeing initial results within a few days, while optimized performance improves over time."
// //   }
 
// // ];

// // function PaidAdv() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [openIndex, setOpenIndex] = useState(null);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const toggleFAQ = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white font-sans">
// //       {/* Hero Carousel - Enhanced with motion */}
// //       <section className="relative h-[85vh] overflow-hidden">
// //         {carouselImages.map((img, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, scale: 1.05 }}
// //             animate={{
// //               opacity: index === currentSlide ? 1 : 0,
// //               scale: index === currentSlide ? 1 : 1.05,
// //             }}
// //             transition={{ duration: 1.2, ease: 'easeInOut' }}
// //             className="absolute inset-0"
// //           >
// //             <img
// //               src={img}
// //               alt="Paid advertising hero"
// //               className="w-full h-full object-cover brightness-[0.45] contrast-125"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center justify-center">
// //               <motion.div
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={staggerContainer}
// //                 className="text-center px-6 max-w-6xl"
// //               >
// //                 <motion.h1
// //                   variants={fadeInUp}
// //                   className="text-6xl md:text-8xl font-black text-red-600 mb-6 tracking-tighter drop-shadow-2xl"
// //                 >
// //                   Atla Knots
// //                 </motion.h1>
// //                 <motion.p
// //                   variants={fadeInUp}
// //                   className="text-3xl md:text-5xl font-bold mb-8"
// //                 >
// //                   Paid Advertising Agency in Bhopal
// //                 </motion.p>
// //                 <motion.p
// //                   variants={fadeInUp}
// //                   className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-tight"
// //                 >
// //                   High-Performance Ads | Real ROI | Pan-India Reach
// //                 </motion.p>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         ))}

// //         {/* Dots with scale + color */}
// //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
// //           {carouselImages.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setCurrentSlide(i)}
// //               className={`w-5 h-5 rounded-full transition-all duration-500 ${
// //                 i === currentSlide
// //                   ? 'bg-red-600 scale-150 shadow-lg shadow-red-600/50'
// //                   : 'bg-gray-600 hover:bg-gray-400'
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </section>

// //       {/* Intro + Features */}
// //       <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="text-center"
// //         >
// //           <motion.h2 variants={fadeInUp} className="text-6xl md:text-7xl font-black text-red-600 mb-10">
// //             We Don’t Just Run Ads — We Deliver Growth
// //           </motion.h2>
// //           <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
// //             Atla Knots — Bhopal's performance-first paid advertising agency turning budgets into measurable business results.
// //           </motion.p>
// //         </motion.section>

// //         <div className="grid md:grid-cols-3 gap-10">
// //           {[
// //             { icon: Target, title: "Precision Targeting", desc: "Advanced audiences, lookalikes, retargeting — no wasted spend." },
// //             { icon: BarChart3, title: "Data-Driven Optimization", desc: "Daily insights, A/B tests, real-time adjustments for peak ROI." },
// //             { icon: TrendingUp, title: "Proven Results", desc: "Lower CPL, higher ROAS, scalable conversions that matter." },
// //           ].map((item, i) => (
// //             <motion.div
// //               key={i}
// //               variants={fadeInUp}
// //               className="bg-gray-900/70 backdrop-blur-md p-10 rounded-2xl border border-red-900/40 hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
// //             >
// //               <item.icon className="w-16 h-16 text-red-500 mb-6 mx-auto group-hover:text-red-400 transition-colors" />
// //               <h3 className="text-3xl font-bold text-red-400 mb-5 text-center">{item.title}</h3>
// //               <p className="text-gray-300 text-lg text-center leading-relaxed">{item.desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Services with icons + image */}
// //         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //           <h2 className="text-6xl font-black text-red-600 text-center mb-16">
// //             Our <span className="text-red-400">Core Advertising Solutions</span>
// //           </h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// //             {[
// //               { icon: Megaphone, title: "Google Ads (Search + Display)", desc: "Capture high-intent searches and dominate display networks." },
// //               { icon: Target, title: "Meta Ads (Facebook & Instagram)", desc: "Scroll-stopping visuals + precise targeting = explosive leads/sales." },
// //               { icon: Youtube, title: "YouTube Video Advertising", desc: "Build trust with engaging video ads that drive recall & action." },
// //               { icon: BarChart3, title: "Performance Marketing", desc: "ROI-first campaigns — every rupee tracked and optimized." },
// //               { icon: Repeat, title: "Remarketing & Retargeting", desc: "Re-engage warm audiences and turn visitors into loyal customers." },
// //             ].map((service, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeInUp}
// //                 className="bg-gray-900/70 p-10 rounded-2xl border border-gray-800 hover:border-red-600/60 hover:shadow-xl transition-all group"
// //               >
// //                 <service.icon className="w-14 h-14 text-red-500 mb-6 group-hover:text-red-400 transition-colors" />
// //                 <h3 className="text-3xl font-bold text-red-400 mb-5">{service.title}</h3>
// //                 <p className="text-gray-300 text-lg">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.section>

// //         {/* Why Choose Us with background image */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black py-20 text-center"
// //         >
// //           <img
// //             src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
// //             alt="Team success"
// //             className="absolute inset-0 object-cover opacity-20"
// //           />
// //           <div className="relative z-10 px-6">
// //             <h2 className="text-6xl font-black text-red-600 mb-10">
// //               Why Businesses Choose Atla Knots
// //             </h2>
// //             <p className="text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
// //               Creative strategy meets ruthless data optimization. Local expertise in Bhopal — national scale across India.
// //             </p>
// //           </div>
// //         </motion.section>

// //         {/* Success Stories */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="text-center"
// //         >
// //           <motion.h2 variants={fadeInUp} className="text-6xl font-black text-red-600 mb-6">
// //             Success Stories
// //           </motion.h2>
// //           <motion.p variants={fadeInUp} className="text-3xl font-bold text-gray-300 mb-4">
// //             From Clicks to Customers — Real Growth, Real Results
// //           </motion.p>
// //           <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
// //             We don’t just run ads—we build success stories. Our campaigns have helped businesses increase leads, boost sales, and grow their online presence.
// //           </motion.p>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               { title: "E-commerce Brand", desc: "ROAS increased from 2.1x to 7.8x in 3 months with Meta + Google Ads optimization." },
// //               { title: "Local Education Institute", desc: "Lead cost dropped 62% while monthly enrollments grew 4.5x using targeted remarketing." },
// //               { title: "Real Estate Developer", desc: "Generated 240+ qualified leads in first month via YouTube & Facebook video campaigns." },
// //             ].map((story, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeInUp}
// //                 className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-red-900/30 hover:border-red-600/60 hover:shadow-xl hover:shadow-red-900/20 transition-all"
// //               >
// //                 <div className="text-5xl font-black text-red-600/30 mb-4">“</div>
// //                 <h3 className="text-2xl font-bold text-red-400 mb-4">{story.title}</h3>
// //                 <p className="text-gray-300 leading-relaxed">{story.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.section>

// //         {/* FAQ Accordion */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="max-w-4xl mx-auto"
// //         >
// //           <motion.h2 variants={fadeInUp} className="text-6xl font-black text-red-600 text-center mb-16">
// //             Frequently Asked Questions
// //           </motion.h2>

// //           <div className="space-y-4">
// //             {faqData.map((faq, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeInUp}
// //                 className="bg-gray-900/70 rounded-xl border border-gray-800 overflow-hidden hover:border-red-600/50 transition-colors"
// //               >
// //                 <button
// //                   onClick={() => toggleFAQ(index)}
// //                   className="w-full px-8 py-6 text-left flex justify-between items-center group"
// //                 >
// //                   <span className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-red-400 transition-colors">
// //                     {faq.question}
// //                   </span>
// //                   <motion.div
// //                     animate={{ rotate: openIndex === index ? 180 : 0 }}
// //                     transition={{ duration: 0.4 }}
// //                   >
// //                     <ChevronDown className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
// //                   </motion.div>
// //                 </button>

// //                 <AnimatePresence>
// //                   {openIndex === index && (
// //                     <motion.div
// //                       initial={{ height: 0, opacity: 0 }}
// //                       animate={{ height: "auto", opacity: 1 }}
// //                       exit={{ height: 0, opacity: 0 }}
// //                       transition={{ duration: 0.4, ease: "easeInOut" }}
// //                       className="overflow-hidden"
// //                     >
// //                       <div className="px-8 pb-6 text-gray-300 text-lg leading-relaxed border-t border-gray-800 pt-4">
// //                         {faq.answer}
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.section>

// //         {/* CTA */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeInUp}
// //           className="text-center py-24"
// //         >
// //           <h2 className="text-7xl font-black text-red-600 mb-10">Ready to Scale?</h2>
// //           <p className="text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
// //             Let’s build ads that don’t just run — they win.
// //           </p>
// //           <button className="group bg-gradient-to-r from-red-600 to-red-800 px-20 py-8 rounded-full text-3xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-4 mx-auto">
// //             Get Your Free Audit Now <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
// //           </button>
// //         </motion.section>
// //       </main>

// //       <footer className="bg-black border-t border-gray-800 py-16 text-center text-gray-500">
// //         <p className="text-xl">© 2026 Atla Knots — Paid Advertising Agency in Bhopal</p>
// //         <p className="mt-3 text-lg">Real Growth. Real Results. Across India.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default PaidAdv;

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { 
//   ArrowRight, Target, BarChart3, TrendingUp, Megaphone, Repeat, Youtube, 
//   ChevronDown, Sparkles, Zap, ShieldCheck 
// } from 'lucide-react';

// // Higher quality, more relevant professional images (marketing / growth focused)
// const carouselImages = [
//   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90', // Team strategy session
//   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90', // Growth analytics dashboard
//   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90',  // Funnel / campaign planning
//   'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90', // ROI success celebration
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } }
// };

// const glassStyle = {
//   background: 'rgba(30, 30, 40, 0.45)',
//   backdropFilter: 'blur(16px)',
//   border: '1px solid rgba(255, 255, 255, 0.08)',
//   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
// };

// const faqData = [
//   {
//     question: "Why choose Atla Knots as your paid ads partner in Bhopal?",
//     answer: "We obsess over ROI — not vanity metrics. Every campaign is built around scalable growth, ruthless testing, and real revenue impact."
//   },
//   {
//     question: "Which ad platforms do you handle?",
//     answer: "Google Ads (Search, Display, Performance Max), Meta (FB + IG), YouTube, LinkedIn, and select native & programmatic networks."
//   },
//   {
//     question: "How do you improve ad performance over time?",
//     answer: "Hourly monitoring + daily optimization, creative fatigue rotation, advanced audience layering, full-funnel A/B testing, and predictive ROAS modeling."
//   },
//   {
//     question: "Do you work with small budgets / startups?",
//     answer: "Absolutely. We have lightweight, high-leverage strategies that deliver strong results even on ₹50k–₹2L monthly spends."
//   },
//   {
//     question: "When will I see meaningful results?",
//     answer: "First meaningful data in 3–7 days. Strong momentum usually in 3–6 weeks once we refine audiences and creatives."
//   }
// ];

// function PaidAdv() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);
  
//   const { scrollYProgress } = useScroll();
//   const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.08]);
//   const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-black text-white font-sans selection:bg-red-900/40">
//       {/* Hero - Enhanced with subtle parallax + gradient text */}
//       <section className="relative h-screen overflow-hidden">
//         {carouselImages.map((img, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.6, ease: 'easeInOut' }}
//           >
//             <motion.img
//               style={{ scale: heroScale, y: heroY }}
//               src={img}
//               alt="Marketing hero"
//               className="w-full h-full object-cover brightness-[0.35] contrast-[1.15] saturate-[1.25]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black flex items-center justify-center">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={staggerContainer}
//                 className="text-center px-5 sm:px-10 max-w-6xl z-10"
//               >
//                 <motion.h1
//                   variants={fadeInUp}
//                   className="text-6xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent mb-5 tracking-[-0.04em] drop-shadow-2xl"
//                 >
//                   Atla Knots
//                 </motion.h1>
//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-8"
//                 >
//                   Paid Advertising Agency<br className="sm:hidden" /> Bhopal
//                 </motion.p>
//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-xl sm:text-3xl text-gray-200/90 max-w-4xl mx-auto font-medium leading-tight"
//                 >
//                   Performance Ads • Explosive ROI • India-Wide Scale
//                 </motion.p>

//                 <motion.div
//                   variants={fadeInUp}
//                   className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
//                 >
//                   <button className="group bg-gradient-to-r from-red-600 to-red-700 px-10 py-6 rounded-full text-2xl font-bold shadow-xl shadow-red-900/50 hover:shadow-red-700/70 hover:scale-[1.04] transition-all flex items-center gap-3">
//                     Free Ad Audit Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//                   </button>
//                   <button className="px-10 py-6 rounded-full text-2xl font-semibold border border-red-600/60 hover:bg-red-950/40 transition-colors">
//                     See Case Studies
//                   </button>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}

//         {/* Progress dots - nicer style */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-5 z-20">
//           {carouselImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentSlide(i)}
//               className={`w-4 h-4 rounded-full transition-all duration-600 ${
//                 i === currentSlide
//                   ? 'bg-gradient-to-r from-red-500 to-orange-500 scale-150 shadow-lg shadow-red-600/60'
//                   : 'bg-white/30 hover:bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features - Glassmorphism cards */}
//       <main className="max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-40">
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-10">
//             We Engineer Growth — Not Just Clicks
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-2xl sm:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
//             Bhopal-based performance marketing agency delivering scalable, revenue-focused paid advertising across India.
//           </motion.p>
//         </motion.section>

//         <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//           {[
//             { icon: Zap, title: "Hyper-Targeted Reach", desc: "Lookalikes, custom intents, layered exclusions — spend only where it converts." },
//             { icon: BarChart3, title: "Obsessive Optimization", desc: "Real-time bidding adjustments, creative velocity, predictive analytics." },
//             { icon: ShieldCheck, title: "Transparent ROI Focus", desc: "Full-funnel tracking, clean dashboards, monthly growth reports." },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               className="rounded-3xl p-10 transition-all group"
//               style={glassStyle}
//             >
//               <item.icon className="w-16 h-16 text-red-400 mb-8 mx-auto group-hover:text-red-300 transition-colors" />
//               <h3 className="text-3xl font-bold text-white mb-5 text-center">{item.title}</h3>
//               <p className="text-gray-300 text-lg text-center leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//           <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Core <span className="text-red-500">Power Channels</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: Megaphone, title: "Google Ads Suite", desc: "Search, Display, PMax, YouTube — high-intent traffic domination." },
//               { icon: Target, title: "Meta Ads (FB/IG)", desc: "Visual storytelling + behavioral targeting = high-volume conversions." },
//               { icon: Youtube, title: "YouTube Video Ads", desc: "Skippable & non-skippable formats that build brand & drive action." },
//               { icon: TrendingUp, title: "Performance Max", desc: "AI-powered cross-channel campaigns with maximum efficiency." },
//               { icon: Repeat, title: "Remarketing Systems", desc: "Dynamic retargeting + abandonment flows that recover lost revenue." },
//             ].map((service, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="rounded-3xl p-10 transition-all group hover:scale-[1.02]"
//                 style={glassStyle}
//               >
//                 <service.icon className="w-14 h-14 text-red-400 mb-6 group-hover:text-red-300 transition-colors" />
//                 <h3 className="text-3xl font-bold text-white mb-5">{service.title}</h3>
//                 <p className="text-gray-300 text-lg">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* CTA Block - bigger & punchier */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="text-center py-32 relative"
//         >
//           <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-60" />
//           <div className="relative z-10">
//             <h2 className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent mb-10">
//               Ready to 3–10× Your Results?
//             </h2>
//             <p className="text-3xl text-gray-200 mb-12 max-w-4xl mx-auto">
//               Stop wasting budget. Start buying customers.
//             </p>
//             <button className="group bg-gradient-to-r from-red-600 via-red-500 to-red-700 px-16 py-8 rounded-full text-3xl font-extrabold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-5 mx-auto">
//               Claim Free Audit + Strategy Session <Sparkles className="w-10 h-10 group-hover:rotate-12 transition-transform" />
//             </button>
//           </div>
//         </motion.section>

//         {/* FAQ - cleaner glass style */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Common Questions
//           </motion.h2>

//           <div className="space-y-5">
//             {faqData.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="rounded-2xl overflow-hidden transition-all"
//                 style={glassStyle}
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-8 py-7 text-left flex justify-between items-center group"
//                 >
//                   <span className="text-xl sm:text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
//                     {faq.question}
//                   </span>
//                   <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.5 }}>
//                     <ChevronDown className="w-9 h-9 text-red-400 group-hover:text-red-300 transition-colors" />
//                   </motion.div>
//                 </button>

//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                       <div className="px-8 pb-8 text-gray-300 text-lg border-t border-white/5 pt-5">
//                         {faq.answer}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </main>

//       <footer className="bg-black/80 border-t border-gray-800/50 py-16 text-center text-gray-500">
//         <p className="text-xl">© 2026 Atla Knots — Performance Paid Advertising • Bhopal</p>
//         <p className="mt-4 text-lg">Real Campaigns. Real Revenue. Pan-India Impact.</p>
//       </footer>
//     </div>
//   );
// }

// export default PaidAdv;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Target, BarChart3, TrendingUp, Megaphone, Repeat, Youtube, 
  ChevronDown, Sparkles 
} from 'lucide-react';

// Professional images (marketing focused, matching ERP style)
const carouselImages = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

function PaidAdv() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white font-sans selection:bg-red-900/30">
      {/* Hero - ERP style red accents */}
      <section className="relative h-screen overflow-hidden">
        {carouselImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <motion.img
              style={{ y: heroY }}
              src={img}
              alt="Professional marketing"
              className="w-full h-full object-cover opacity-30 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black flex items-center justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center px-6 max-w-6xl z-10"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tight bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
                >
                  Atla Knots
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 text-red-400"
                >
                  Paid Advertising Agency<br className="sm:hidden" /> Bhopal
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-tight"
                >
                  Performance-First Campaigns • Measurable Growth • India-Wide
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <button className="group px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3">
                    Free Campaign Audit <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-2xl font-bold hover:bg-red-950/50 transition-all">
                    View Results →
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-700 ${
                i === currentSlide
                  ? 'bg-red-600 scale-150 shadow-lg shadow-red-600/50'
                  : 'bg-gray-600 hover:bg-red-400'
              }`}
            />
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-40">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Growth Through Precision Advertising
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-2xl sm:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Bhopal's performance marketing agency focused on real revenue, efficient scaling, and transparent results.
          </motion.p>
        </motion.section>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { icon: Target, title: "Intelligent Targeting", desc: "Advanced audiences, lookalikes, behavioral layers — maximum relevance, minimum waste." },
            { icon: BarChart3, title: "Continuous Optimization", desc: "Daily performance tuning, A/B testing, creative refresh cycles." },
            { icon: TrendingUp, title: "Revenue-Focused Tracking", desc: "Full attribution, clean dashboards, monthly ROI reporting." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-3xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all"
            >
              <item.icon className="w-16 h-16 text-red-500 mb-8 mx-auto" />
              <h3 className="text-3xl font-bold text-red-400 mb-5 text-center">{item.title}</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Services - ERP style cards */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Core <span className="text-red-500">Channels</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Megaphone, title: "Google Ads", desc: "Search, Display, Performance Max — high-intent traffic acquisition." },
              { icon: Target, title: "Meta Ads", desc: "Facebook & Instagram — visual, behavioral, high-conversion campaigns." },
              { icon: Youtube, title: "YouTube Advertising", desc: "Video formats that build awareness and drive action." },
              { icon: TrendingUp, title: "Performance Marketing", desc: "ROI-centric strategies across multiple platforms." },
              { icon: Repeat, title: "Remarketing", desc: "Re-engage visitors and recover lost opportunities." },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gray-900/70 border border-red-900/40 rounded-3xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all"
              >
                <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto block" />
                <h3 className="text-3xl font-bold text-red-400 mb-5 text-center">{service.title}</h3>
                <p className="text-gray-300 text-lg text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA - ERP style bold red */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-32"
        >
          <h2 className="text-6xl sm:text-8xl font-black mb-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Ready to Scale Smarter?
          </h2>
          <p className="text-3xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Let's turn your ad spend into predictable revenue.
          </p>
          <button className="group px-16 py-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-3xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-5 mx-auto">
            Get Your Free Audit <Sparkles className="w-9 h-9 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.section>

        {/* FAQ - ERP style */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl sm:text-7xl font-black text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked
          </motion.h2>

          <div className="space-y-6">
            {[
              { q: "Why Atla Knots for paid advertising in Bhopal?", a: "We prioritize measurable revenue over impressions. Every campaign is built for ROI, scalability, and long-term growth." },
              { q: "Which platforms do you manage?", a: "Google Ads, Meta (Facebook + Instagram), YouTube, LinkedIn, and select programmatic networks." },
              { q: "How do you improve campaign results?", a: "Continuous testing, audience refinement, creative rotation, real-time optimization, and data-backed decisions." },
              { q: "Suitable for small businesses?", a: "Yes — we create efficient, high-ROI strategies even for modest monthly budgets (₹50k+)." },
              { q: "How long until I see results?", a: "Initial insights in 4–10 days. Strong, consistent performance typically builds in 4–8 weeks." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-black border-t border-red-900/30 py-16 text-center text-gray-500">
        <p className="text-xl">© 2026 Atla Knots — Performance Advertising • Bhopal</p>
        <p className="mt-4 text-lg">Data-Driven. Results-Focused. India-Wide Reach.</p>
      </footer>
    </div>
  );
}

export default PaidAdv;