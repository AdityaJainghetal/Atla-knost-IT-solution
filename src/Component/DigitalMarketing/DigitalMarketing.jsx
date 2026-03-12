// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, BarChart3, Users, Megaphone, Search, Mail, TrendingUp } from "lucide-react";

// // // Random image - modern agency workspace (you can replace src with your own)
// // const heroImage = "https://www.architectandinteriorsindia.com/cloud/2024/05/15/LWYD-Workspace-10-scaled.jpg";

// // const services = [
// //   { icon: Users, title: "Social Media Management", desc: "Engaging content, regular posting, and strategic campaigns to boost awareness and interaction." },
// //   { icon: Megaphone, title: "Content Marketing", desc: "Valuable, trust-building content that attracts and converts potential customers." },
// //   { icon: Search, title: "Search Engine Optimization", desc: "Improve visibility, drive organic traffic, and reach people searching for your services." },
// //   { icon: Mail, title: "Email Marketing", desc: "Targeted campaigns to nurture leads and build lasting customer relationships." },
// //   { icon: TrendingUp, title: "Social Media Advertisements", desc: "Creative, high-engagement ads across platforms to reach the right audience." },
// //   { icon: BarChart3, title: "Google Ads Management", desc: "Optimized campaigns that maximize ROI and deliver measurable results." },
// // ];

// // const industries = [
// //   "Advertising and Media", "Construction and Builders", "Education and Training",
// //   "Finance and Insurance", "Healthcare and Medical Services", "E-Commerce",
// //   "Entertainment", "Real Estate", "Hospitality", "Engineering Services",
// //   "Health and Wellness", "Technology", "Automobile Services", "Property Management",
// //   "Business Consulting", "Home Renovation", "Beauty and Wellness"
// // ];

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.12 } }
// // };

// // export default function DigitalMarketing() {
// //   return (
// //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
// //         <div className="absolute inset-0">
// //           <img
// //             src={heroImage}
// //             alt="Modern digital marketing agency workspace"
// //             className="w-full h-full object-cover opacity-30 brightness-50"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
// //         </div>

// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="relative z-10 max-w-7xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
// //           >
// //             Driving Growth with{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
// //               Proven Digital Marketing
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
// //           >
// //             Partner with <span className="text-red-400 font-semibold">Atla Knots IT Solution</span> — one of India’s trusted digital marketing companies — and grow your business with smart, result-driven online strategies.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Request a Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
// //               Free Consultation
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* Transform Your Vision */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={staggerContainer}
// //             className="text-center mb-16"
// //           >
// //             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6">
// //               Transform Your Vision into <span className="text-red-500">Digital Success</span>
// //             </motion.h2>
// //             <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto">
// //               With India’s Trusted Digital Marketing Services — customized, scalable, and future-ready strategies tailored to your goals.
// //             </motion.p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeInUp}
// //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all group"
// //               >
// //                 <h3 className="text-3xl font-bold mb-4 text-red-400 group-hover:text-red-300 transition-colors">
// //                   {title}
// //                 </h3>
// //                 <p className="text-gray-300">
// //                   {title === "Be Unique" && "Strategies designed specifically for your business goals and audience."}
// //                   {title === "Be Scalable" && "Flexible solutions that grow with your company."}
// //                   {title === "Be Future Ready" && "Modern tools and innovative approaches to stay ahead."}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Complete Digital Marketing <span className="text-red-500">Solutions</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/20 transition-all group"
// //               >
// //                 <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
// //                 <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
// //                 <p className="text-gray-300 text-center">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Process */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Our <span className="text-red-500">Process</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-5 gap-6 text-center">
// //             {["01 Discovery & Strategy", "02 Research & Planning", "03 Creative Implementation", "04 Optimization & SEO", "05 Analytics & Reporting"].map((step, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.15 }}
// //                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-xl p-6 hover:border-red-600 transition-all"
// //               >
// //                 <div className="text-3xl font-black text-red-500 mb-3">{step.split(" ")[0]}</div>
// //                 <p className="font-semibold">{step.split(" ").slice(1).join(" ")}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industries */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black mb-12"
// //           >
// //             Industries We <span className="text-red-500">Serve</span>
// //           </motion.h2>

// //           <div className="flex flex-wrap justify-center gap-4">
// //             {industries.map((ind, i) => (
// //               <motion.span
// //                 key={i}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.03 }}
// //                 className="px-6 py-3 bg-gray-900/60 border border-red-900/30 rounded-full text-gray-200 hover:bg-red-900/30 hover:border-red-600/50 transition-all"
// //               >
// //                 {ind}
// //               </motion.span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final CTA */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-950/50 to-transparent">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-6xl font-black mb-8"
// //           >
// //             Let’s Elevate Your Brand with <span className="text-red-500">Digital Marketing</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
// //           >
// //             Ready to improve visibility, generate leads, and grow online? Contact us today and start your digital growth journey.
// //           </motion.p>

// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.98 }}
// //             className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all"
// //           >
// //             Get Started Today →
// //           </motion.button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, BarChart3, Users, Megaphone, Search, Mail, TrendingUp } from "lucide-react";

// // You can replace this with your own hero image import
// const heroImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";

// const services = [
//   { icon: Users, title: "Social Media Management", desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction." },
//   { icon: Megaphone, title: "Content Marketing", desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth." },
//   { icon: Search, title: "Search Engine Optimization", desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online." },
//   { icon: Mail, title: "Email Marketing", desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships." },
//   { icon: TrendingUp, title: "Social Media Advertisements", desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms." },
//   { icon: BarChart3, title: "Google Ads Management", desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment." },
// ];

// const industries = [
//   "Advertising and Media", "Construction and Builders", "Education and Training",
//   "Finance and Insurance", "Healthcare and Medical Services", "E-Commerce",
//   "Entertainment", "Real Estate", "Hospitality", "Engineering Services",
//   "Health and Wellness", "Technology", "Automobile Services", "Property Management",
//   "Business Consulting", "Home Renovation", "Beauty and Wellness"
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } }
// };

// export default function DigitalMarketing() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
//         <div className="absolute inset-0">
//           <img
//             src={heroImage}
//             alt="Modern digital marketing workspace and strategy"
//             className="w-full h-full object-cover opacity-25 brightness-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
//         </div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
//           >
//             Driving Growth with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
//               Proven Digital Marketing Strategies
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed"
//           >
//             Powering Growth with a Top Digital Marketing Agency
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             Partner with <span className="text-red-400 font-semibold">Atlas Knots IT Solution</span>, one of India’s trusted digital marketing companies, and grow your business with smart online marketing strategies.
//             <br /><br />
//             Our team helps businesses increase their online presence, reach the right audience, and generate quality leads through well-planned digital marketing campaigns.
//             <br /><br />
//             Partner with a leading digital marketing company in India to grow your brand online.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
//               Request a Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
//               Free Consultation
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Transform Your Vision */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6">
//               Transform Your Vision into <span className="text-red-500">Digital Success</span>
//             </motion.h2>
//             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//               With India’s Trusted Digital Marketing Services
//             </motion.p>
//           </motion.div>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed text-center"
//           >
//             At Atlas Knots IT Solution, we help businesses turn their ideas into real digital success through practical and effective marketing strategies.
//           </motion.p>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all group"
//               >
//                 <h3 className="text-3xl font-bold mb-4 text-red-400 group-hover:text-red-300 transition-colors">
//                   {title}
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {title === "Be Unique" && "Get digital marketing strategies designed specifically for your business goals and target audience."}
//                   {title === "Be Scalable" && "Grow your business with flexible marketing solutions that can expand as your company grows."}
//                   {title === "Be Future Ready" && "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed text-center"
//           >
//             At Atlas Knots IT Solution, we create customized digital marketing strategies that help businesses strengthen their brand presence, manage campaigns smoothly, and build long-term engagement with customers.
//             <br /><br />
//             As a trusted digital marketing company in India, we understand that every business has different goals. That is why our team creates tailored marketing solutions that help generate leads, increase website traffic, and improve customer connections.
//             <br /><br />
//             Our strategies focus on helping businesses grow through practical, measurable, and result-focused marketing campaigns.
//             <br /><br />
//             With years of experience in digital marketing services, our team ensures smooth campaign management, data-driven decisions, and continuous improvements.
//             <br /><br />
//             From strategy planning to campaign optimization, our services are designed to support long-term business growth and build a strong digital presence.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
//           >
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all">
//               Connect with a Leading Digital Marketing Agency in India →
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Complete Digital Marketing Solutions + Services */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-8"
//           >
//             Complete Digital Marketing <span className="text-red-500">Solutions</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto"
//           >
//             At Atlas Knots IT Solution, we provide reliable and effective digital marketing solutions that help businesses build a strong brand presence and achieve real results.
//             <br /><br />
//             Our services are designed to match your business goals and help you reach the right audience at the right time.
//           </motion.p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
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
//                 <p className="text-gray-300 text-center leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Innovation Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black mb-10"
//           >
//             Innovation That Drives <span className="text-red-500">Business Growth</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             At Atlas Knots IT Solution, we believe digital marketing should focus on real results and long-term success.
//             <br /><br />
//             Our team works with businesses of all sizes to create marketing strategies that improve brand visibility, increase engagement, and support sustainable growth.
//             <br /><br />
//             Whether you are a startup or an established company, we help you use digital marketing effectively to reach your audience and grow your brand online.
//           </motion.p>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Our <span className="text-red-500">Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-5 gap-6 text-center">
//             {["01 Discovery & Strategy", "02 Research & Planning", "03 Creative Implementation", "04 Optimization & SEO", "05 Analytics & Reporting"].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-xl p-6 hover:border-red-600 transition-all min-h-[180px] flex flex-col justify-center"
//               >
//                 <div className="text-3xl font-black text-red-500 mb-4">{step.split(" ")[0]}</div>
//                 <p className="font-semibold text-lg">{step.split(" ").slice(1).join(" ")}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black mb-12"
//           >
//             Industries We <span className="text-red-500">Serve</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
//           >
//             At Atlas Knots IT Solution, we create digital marketing strategies for businesses across different industries.
//             <br />
//             Our team understands the unique needs of each industry and builds marketing solutions that help businesses grow.
//           </motion.p>

//           <div className="flex flex-wrap justify-center gap-4">
//             {industries.map((ind, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.03 }}
//                 className="px-6 py-3 bg-gray-900/60 border border-red-900/30 rounded-full text-gray-200 hover:bg-red-900/30 hover:border-red-600/50 transition-all text-sm md:text-base"
//               >
//                 {ind}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Work + Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-950/50 to-transparent">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-8"
//           >
//             Our <span className="text-red-500">Work</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
//           >
//             Our portfolio reflects our experience in building strong digital platforms and marketing strategies for businesses.
//             <br /><br />
//             We help companies improve their online presence, attract customers, and grow their brand through well-designed websites and digital marketing campaigns.
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-10"
//           >
//             Let’s Elevate Your Brand with <span className="text-red-500">Digital Marketing</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             At Atlas Knots IT Solution, we believe every business has the potential to grow online with the right strategy.
//             <br /><br />
//             If you want to improve your brand visibility, generate more leads, and expand your business, our team is ready to help.
//             <br /><br />
//             Contact us today and start your digital growth journey with Atlas Knots IT Solution.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all"
//           >
//             Get Started Today →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Megaphone, Search, Mail, TrendingUp } from "lucide-react";

// Random high-quality images (you can replace later with your own)
const images = {
  hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  strategy: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  analytics: "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  growth: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
};

const services = [
  { icon: Users, title: "Social Media Management", desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction." },
  { icon: Megaphone, title: "Content Marketing", desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth." },
  { icon: Search, title: "Search Engine Optimization", desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online." },
  { icon: Mail, title: "Email Marketing", desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships." },
  { icon: TrendingUp, title: "Social Media Advertisements", desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms." },
  { icon: BarChart3, title: "Google Ads Management", desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment." },
];

const industries = [
  "Advertising and Media", "Construction and Builders", "Education and Training",
  "Finance and Insurance", "Healthcare and Medical Services", "E-Commerce",
  "Entertainment", "Real Estate", "Hospitality", "Engineering Services",
  "Health and Wellness", "Technology", "Automobile Services", "Property Management",
  "Business Consulting", "Home Renovation", "Beauty and Wellness"
];

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function DigitalMarketing() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Modern digital marketing strategy workspace"
            className="w-full h-full object-cover opacity-30 brightness-50"
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
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
          >
            Driving Growth with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Proven Digital Marketing Strategies
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-red-400 mb-6"
          >
            Powering Growth with a Top Digital Marketing Agency
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Partner with <span className="text-red-400 font-semibold">Atlas Knots IT Solution</span>, one of India’s trusted digital marketing companies, and grow your business with smart online marketing strategies.
            <br /><br />
            Our team helps businesses increase their online presence, reach the right audience, and generate quality leads through well-planned digital marketing campaigns.
            <br /><br />
            Partner with a leading digital marketing company in India to grow your brand online.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Request a Quote <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Transform Your Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6">
              Transform Your Vision into <span className="text-red-500">Digital Success</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-red-400 font-bold mb-8">
              With India’s Trusted Digital Marketing Services
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At Atlas Knots IT Solution, we help businesses turn their ideas into real digital success through practical and effective marketing strategies.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {["Be Unique", "Be Scalable", "Be Future Ready"].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
              >
                <h3 className="text-4xl font-black mb-6 text-red-500 group-hover:text-red-400 transition-colors">
                  {title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {title === "Be Unique" && "Get digital marketing strategies designed specifically for your business goals and target audience."}
                  {title === "Be Scalable" && "Grow your business with flexible marketing solutions that can expand as your company grows."}
                  {title === "Be Future Ready" && "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center mb-16"
          >
            At Atlas Knots IT Solution, we create customized digital marketing strategies that help businesses strengthen their brand presence, manage campaigns smoothly, and build long-term engagement with customers.
            <br /><br />
            As a trusted digital marketing company in India, we understand that every business has different goals. That is why our team creates tailored marketing solutions that help generate leads, increase website traffic, and improve customer connections.
            <br /><br />
            Our strategies focus on helping businesses grow through practical, measurable, and result-focused marketing campaigns.
            <br /><br />
            With years of experience in digital marketing services, our team ensures smooth campaign management, data-driven decisions, and continuous improvements.
            <br /><br />
            From strategy planning to campaign optimization, our services are designed to support long-term business growth and build a strong digital presence.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all">
              Connect with a Leading Digital Marketing Agency in India →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Complete Solutions + Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-12"
          >
            Complete Digital Marketing <span className="text-red-500">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
          >
            At Atlas Knots IT Solution, we provide reliable and effective digital marketing solutions that help businesses build a strong brand presence and achieve real results.
            <br /><br />
            Our services are designed to match your business goals and help you reach the right audience at the right time.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
              >
                <service.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-12"
          >
            Innovation That Drives <span className="text-red-500">Business Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
          >
            At Atlas Knots IT Solution, we believe digital marketing should focus on real results and long-term success.
            <br /><br />
            Our team works with businesses of all sizes to create marketing strategies that improve brand visibility, increase engagement, and support sustainable growth.
            <br /><br />
            Whether you are a startup or an established company, we help you use digital marketing effectively to reach your audience and grow your brand online.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.growth}
            alt="Business growth through digital marketing"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover"
          />
        </div>
      </section>

      {/* Process + Our Work + Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Our <span className="text-red-500">Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6 text-center mb-20">
            {["01 Discovery & Strategy", "02 Research & Planning", "03 Creative Implementation", "04 Optimization & SEO", "05 Analytics & Reporting"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/50 rounded-xl p-8 hover:border-red-600 transition-all min-h-[200px] flex flex-col justify-center shadow-lg"
              >
                <div className="text-4xl font-black text-red-500 mb-4">{step.split(" ")[0]}</div>
                <p className="font-bold text-lg">{step.split(" ").slice(1).join(" ")}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8">
              Our <span className="text-red-500">Work</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our portfolio reflects our experience in building strong digital platforms and marketing strategies for businesses.
              <br /><br />
              We help companies improve their online presence, attract customers, and grow their brand through well-designed websites and digital marketing campaigns.
            </motion.p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
              Let’s Elevate Your Brand with <span className="text-red-500">Digital Marketing</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              At Atlas Knots IT Solution, we believe every business has the potential to grow online with the right strategy.
              <br /><br />
              If you want to improve your brand visibility, generate more leads, and expand your business, our team is ready to help.
              <br /><br />
              Contact us today and start your digital growth journey with Atlas Knots IT Solution.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
            >
              Get Started Today →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}