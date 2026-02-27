

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, ChevronDown } from 'lucide-react';

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const FAQAccordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What kind of projects do you take?",
//       answer:
//         "We handle custom web & mobile applications, enterprise software, government / PSU compliant systems, cloud migrations, legacy modernization, and full digital transformation initiatives.",
//     },
//     {
//       question: "Do you provide maintenance after launch?",
//       answer:
//         "Yes — we offer comprehensive Application Maintenance Services (AMS) including proactive monitoring, bug fixes, performance optimization, security patches, and regular updates.",
//     },
//     {
//       question: "What are your BPO working hours?",
//       answer:
//         "We provide 24/7 support coverage with multiple shifts. Most clients choose 24×5 or 24×7 depending on their time zone and SLA requirements.",
//     },
//     {
//       question: "Which technologies do you work with?",
//       answer:
//         "Frontend: React, Next.js, TypeScript | Backend: Java + Spring Boot, Node.js, Python | Databases: PostgreSQL, MongoDB, MySQL | Cloud: AWS, Azure, GCP | Others: Docker, Kubernetes, CI/CD pipelines.",
//     },
//     {
//       question: "How do you ensure data security & compliance?",
//       answer:
//         "We follow ISO 27001 practices, implement encryption at rest & in transit, conduct regular security audits, follow GDPR / DPDP / IT Act guidelines (where applicable), and provide role-based access control.",
//     },
//   ];

//   return (
//     <div className="space-y-4">
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className="bg-gray-950/60 backdrop-blur-md border border-red-900/40 rounded-2xl overflow-hidden"
//         >
//           <button
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-950/30 transition-colors"
//           >
//             <span className="text-lg md:text-xl font-medium text-white">
//               {faq.question}
//             </span>
//             <ChevronDown
//               className={`w-6 h-6 text-red-400 transition-transform duration-300 ${
//                 openIndex === index ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           <motion.div
//             initial={false}
//             animate={{ height: openIndex === index ? 'auto' : 0 }}
//             className="overflow-hidden"
//           >
//             <div className="px-6 pb-5 text-gray-300 leading-relaxed">
//               {faq.answer}
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Service = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-gray-100 overflow-x-hidden">
//       {/* Simple static dark gradient background */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 lg:py-32">
//         {/* Hero Section */}
//         <div className="text-center mb-16 md:mb-24">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
//             <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
//               Our Services
//             </span>
//           </h1>

//           <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
//             End-to-end IT solutions & premium BPO services — empowering your business with innovation, reliability, and scale.
//           </p>

//           <div className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
//         </div>

//         {/* IT Services Section */}
//         <section className="mb-24 md:mb-32">
//           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
//               <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[720px] overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
//                   alt="Modern development & code"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
//             </div>

//             {/* Content */}
//             <div className="w-full lg:w-1/2 space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
//                 Information Technology Services
//               </h2>

//               <p className="text-xl text-gray-300 leading-relaxed">
//                 Full-cycle development — from concept to deployment and long-term success.
//               </p>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {[
//                   { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards, ERP & scalable solutions" },
//                   { title: "Testing & Deployment", desc: "Automated & manual QA, CI/CD, smooth production rollout" },
//                   { title: "Application Maintenance (AMS)", desc: "Proactive monitoring, updates, performance tuning" },
//                   { title: "Digital Transformation", desc: "Cloud migration, legacy modernization, strategy" },
//                   { title: "Government & PSU Projects", desc: "Secure systems, citizen portals, compliance-focused delivery" },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-3 mt-6">
//                 {['Java + Spring Boot', 'React / Next.js', 'Node.js', 'PostgreSQL / MongoDB', 'AWS / Azure'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-5 py-2 bg-red-950/40 border border-red-800/40 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* BPO Section */}
//         <section className="mb-24 md:mb-32">
//           <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
//               <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[620px] overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
//                   alt="Professional support team"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
//             </div>

//             {/* Content */}
//             <div className="w-full lg:w-1/2 space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
//                 Business Process Outsourcing (BPO)
//               </h2>

//               <p className="text-xl text-gray-300 leading-relaxed">
//                 High-quality customer support, data operations & back-office excellence — 24/7 ready.
//               </p>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {[
//                   {
//                     title: "Voice • Chat • Email Support",
//                     desc: "Inbound / outbound calls, live chat, structured email handling",
//                   },
//                   {
//                     title: "Cataloguing & Data Enrichment",
//                     desc: "Product descriptions, SEO tags, image validation, attribute correction",
//                   },
//                   {
//                     title: "Level 2 (L2) Support",
//                     desc: "Advanced troubleshooting, root cause analysis, escalated issue resolution",
//                   },
//                   {
//                     title: "Quality & Infrastructure",
//                     desc: "SLA compliance, regular audits, coaching, fully equipped call centers",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-gray-950/60 to-black">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//             className="max-w-4xl mx-auto"
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-5xl md:text-6xl font-bold text-center mb-6"
//             >
//               FREQUENTLY <span className="text-red-500">ASKED</span> QUESTIONS
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-400 text-center mb-16"
//             >
//               Got questions? We've got answers.
//             </motion.p>

//             <FAQAccordion />
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Service;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const FAQAccordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What kind of projects do you take?",
//       answer:
//         "We handle custom web & mobile applications, enterprise software, government / PSU compliant systems, cloud migrations, legacy modernization, and full digital transformation initiatives.",
//     },
//     {
//       question: "Do you provide maintenance after launch?",
//       answer:
//         "Yes — we offer comprehensive Application Maintenance Services (AMS) including proactive monitoring, bug fixes, performance optimization, security patches, and regular updates.",
//     },
//     {
//       question: "What are your BPO working hours?",
//       answer:
//         "We provide 24/7 support coverage with multiple shifts. Most clients choose 24×5 or 24×7 depending on their time zone and SLA requirements.",
//     },
//     {
//       question: "Which technologies do you work with?",
//       answer:
//         "Frontend: React, Next.js, TypeScript | Backend: Java + Spring Boot, Node.js, Python | Databases: PostgreSQL, MongoDB, MySQL | Cloud: AWS, Azure, GCP | Others: Docker, Kubernetes, CI/CD pipelines.",
//     },
//     {
//       question: "How do you ensure data security & compliance?",
//       answer:
//         "We follow ISO 27001 practices, implement encryption at rest & in transit, conduct regular security audits, follow GDPR / DPDP / IT Act guidelines (where applicable), and provide role-based access control.",
//     },
//   ];

//   return (
//     <div className="space-y-2">
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className="group bg-gray-950/70 backdrop-blur-lg border border-red-900/40 rounded-2xl overflow-hidden shadow-lg shadow-red-950/20 hover:shadow-red-900/40 transition-all duration-300"
//         >
//           <button
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-red-950/30 transition-colors duration-300"
//           >
//             <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-red-300 transition-colors">
//               {faq.question}
//             </span>
//             <ChevronDown
//               className={`w-7 h-7 text-red-400 flex-shrink-0 transition-transform duration-400 ${
//                 openIndex === index ? 'rotate-180 scale-110' : 'scale-100'
//               }`}
//             />
//           </button>

//           <motion.div
//             initial={false}
//             animate={{ 
//               height: openIndex === index ? 'auto' : 0,
//               opacity: openIndex === index ? 1 : 0 
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <div className="px-6 pb-6 pt-2 text-gray-200 leading-relaxed text-lg border-t border-red-900/30">
//               {faq.answer}
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Service = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-gray-100 overflow-x-hidden">
//       {/* Simple static dark gradient background */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 lg:py-32">
//         {/* Hero Section */}
//         <div className="text-center mb-16 md:mb-24">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
//             <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
//               Our Services
//             </span>
//           </h1>

//           <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
//             End-to-end IT solutions & premium BPO services — empowering your business with innovation, reliability, and scale.
//           </p>

//           <div className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
//         </div>

//         {/* IT Services Section */}
//         <section className="mb-24 md:mb-32">
//           <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
//               <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[720px] overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
//                   alt="Modern development & code"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
//             </div>

//             {/* Content */}
//             <div className="w-full lg:w-1/2 space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
//                 Information Technology Services
//               </h2>

//               <p className="text-xl text-gray-300 leading-relaxed">
//                 Full-cycle development — from concept to deployment and long-term success.
//               </p>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {[
//                   { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards, ERP & scalable solutions" },
//                   { title: "Testing & Deployment", desc: "Automated & manual QA, CI/CD, smooth production rollout" },
//                   { title: "Application Maintenance (AMS)", desc: "Proactive monitoring, updates, performance tuning" },
//                   { title: "Digital Transformation", desc: "Cloud migration, legacy modernization, strategy" },
//                   { title: "Government & PSU Projects", desc: "Secure systems, citizen portals, compliance-focused delivery" },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-3 mt-6">
//                 {['Java + Spring Boot', 'React / Next.js', 'Node.js', 'PostgreSQL / MongoDB', 'AWS / Azure'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-5 py-2 bg-red-950/40 border border-red-800/40 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* BPO Section */}
//         <section className="mb-24 md:mb-32">
//           <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
//               <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[620px] overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
//                   alt="Professional support team"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
//             </div>

//             {/* Content */}
//             <div className="w-full lg:w-1/2 space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
//                 Business Process Outsourcing (BPO)
//               </h2>

//               <p className="text-xl text-gray-300 leading-relaxed">
//                 High-quality customer support, data operations & back-office excellence — 24/7 ready.
//               </p>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {[
//                   {
//                     title: "Voice • Chat • Email Support",
//                     desc: "Inbound / outbound calls, live chat, structured email handling",
//                   },
//                   {
//                     title: "Cataloguing & Data Enrichment",
//                     desc: "Product descriptions, SEO tags, image validation, attribute correction",
//                   },
//                   {
//                     title: "Level 2 (L2) Support",
//                     desc: "Advanced troubleshooting, root cause analysis, escalated issue resolution",
//                   },
//                   {
//                     title: "Quality & Infrastructure",
//                     desc: "SLA compliance, regular audits, coaching, fully equipped call centers",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section with Background Image */}
//         <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden rounded-3xl my-16">
//           {/* Background Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80')`, // fallback
//             }}
//           >
            
//             <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/abstract-red-waveform-glowing-particles-digital-design-art-projects-generative-ai-dynamic-featuring-flowing-435760061.jpg')] bg-cover bg-center opacity-30"></div>
            
//             {/* Option 3 - Red neon grid tunnel (cyberpunk vibe) */}
//             {/* <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/red-neon-grid-lines-stretch-dark-foggy-tunnel-futuristic-cyber-background-features-glowing-light-tech-aesthetic-vaporwave-422611153.jpg')] bg-cover bg-center opacity-35"></div> */}
//           </div>

//           {/* Dark overlay for readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />

//           <div className="relative z-10 max-w-4xl mx-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={staggerContainer}
//             >
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight"
//               >
//                 FREQUENTLY <span className="text-red-500">ASKED</span> QUESTIONS
//               </motion.h2>

//               <motion.p
//                 variants={fadeInUp}
//                 className="text-xl text-gray-300 text-center mb-16 font-light"
//               >
//                 Got questions? We've got clear answers.
//               </motion.p>

//               <FAQAccordion />
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Service;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of projects do you take?",
      answer:
        "We handle custom web & mobile applications, enterprise software, government / PSU compliant systems, cloud migrations, legacy modernization, and full digital transformation initiatives.",
    },
    {
      question: "Do you provide maintenance after launch?",
      answer:
        "Yes — we offer comprehensive Application Maintenance Services (AMS) including proactive monitoring, bug fixes, performance optimization, security patches, and regular updates.",
    },
    {
      question: "What are your BPO working hours?",
      answer:
        "We provide 24/7 support coverage with multiple shifts. Most clients choose 24×5 or 24×7 depending on their time zone and SLA requirements.",
    },
    {
      question: "Which technologies do you work with?",
      answer:
        "Frontend: React, Next.js, TypeScript | Backend: Java + Spring Boot, Node.js, Python | Databases: PostgreSQL, MongoDB, MySQL | Cloud: AWS, Azure, GCP | Others: Docker, Kubernetes, CI/CD pipelines.",
    },
    {
      question: "How do you ensure data security & compliance?",
      answer:
        "We follow ISO 27001 practices, implement encryption at rest & in transit, conduct regular security audits, follow GDPR / DPDP / IT Act guidelines (where applicable), and provide role-based access control.",
    },
  ];

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-gray-950/75 backdrop-blur-lg border border-red-900/50 rounded-2xl overflow-hidden shadow-xl shadow-black/40 hover:shadow-red-900/40 transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-red-950/40 transition-colors duration-300"
          >
            <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-red-300 transition-colors">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-7 h-7 md:w-8 md:h-8 text-red-400 flex-shrink-0 transition-transform duration-400 ${
                openIndex === index ? 'rotate-180 scale-110' : 'scale-100'
              }`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{ 
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0 
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 pt-3 text-gray-200 leading-relaxed text-base md:text-lg border-t border-red-900/40">
              {faq.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const Service = () => {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-x-hidden">
      {/* Global background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 lg:py-32">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            End-to-end IT solutions & premium BPO services — empowering your business with innovation, reliability, and scale.
          </p>

          <div className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
        </div>

        {/* IT Services Section */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
              <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[720px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern development & code"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                Information Technology Services
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Full-cycle development — from concept to deployment and long-term success.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards, ERP & scalable solutions" },
                  { title: "Testing & Deployment", desc: "Automated & manual QA, CI/CD, smooth production rollout" },
                  { title: "Application Maintenance (AMS)", desc: "Proactive monitoring, updates, performance tuning" },
                  { title: "Digital Transformation", desc: "Cloud migration, legacy modernization, strategy" },
                  { title: "Government & PSU Projects", desc: "Secure systems, citizen portals, compliance-focused delivery" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Java + Spring Boot', 'React / Next.js', 'Node.js', 'PostgreSQL / MongoDB', 'AWS / Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 bg-red-950/40 border border-red-800/40 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BPO Section */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/30 shadow-2xl shadow-black/40 relative group">
              <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[620px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional support team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                Business Process Outsourcing (BPO)
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                High-quality customer support, data operations & back-office excellence — 24/7 ready.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: "Voice • Chat • Email Support",
                    desc: "Inbound / outbound calls, live chat, structured email handling",
                  },
                  {
                    title: "Cataloguing & Data Enrichment",
                    desc: "Product descriptions, SEO tags, image validation, attribute correction",
                  },
                  {
                    title: "Level 2 (L2) Support",
                    desc: "Advanced troubleshooting, root cause analysis, escalated issue resolution",
                  },
                  {
                    title: "Quality & Infrastructure",
                    desc: "SLA compliance, regular audits, coaching, fully equipped call centers",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-gray-950/70 backdrop-blur-md border border-red-900/30 rounded-2xl p-6 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Wider version */}
        <section className="relative py-20 md:py-24 lg:py-28 px-5 sm:px-8 md:px-10 lg:px-16 overflow-hidden rounded-3xl my-12 md:my-16 bg-black/40">
          {/* Background Image - only for FAQ */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />

          {/* Red particle/flow layer (active) */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://thumbs.dreamstime.com/b/abstract-red-waveform-glowing-particles-digital-design-art-projects-generative-ai-dynamic-featuring-flowing-435760061.jpg')`,
            }}
          />

          {/* Strong dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/90" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 md:mb-8 tracking-tight"
              >
                FREQUENTLY <span className="text-red-500">ASKED</span> QUESTIONS
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center mb-12 md:mb-16 font-light max-w-4xl mx-auto"
              >
                Got questions? We've got clear, straightforward answers.
              </motion.p>

              <FAQAccordion />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;