// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Code, Globe, Server, Smartphone, Database, Cloud, Users } from "lucide-react";

// // // Random high-quality images (replace with your own when ready)
// // const images = {
// //   hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   code: "https://images.unsplash.com/photo-1555066931-bf19c9cb1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   cloud: "https://images.unsplash.com/photo-1563986768609-620da13593e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// //   growth: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// // };

// // const services = [
// //   { icon: Code, title: "Custom Software Development", desc: "Develop software applications according to the changing needs of your business and customers. We build fully functional, feature-rich, and scalable software that solves business challenges and supports growth." },
// //   { icon: Globe, title: "Web Development Services", desc: "Grow your business with custom web development solutions that match your business requirements. Secure, scalable, and high-performance web applications that integrate perfectly with your ecosystem." },
// //   { icon: Cloud, title: "Cloud & DevOps Solutions", desc: "Automation and cloud technologies help businesses manage operations efficiently. Streamline workflows, improve collaboration, and accelerate development while maintaining high performance." },
// //   { icon: Users, title: "Dedicated Development Team", desc: "Hire a dedicated team of experienced developers, architects, and project managers who understand your business needs and deliver real solutions." },
// //   { icon: Smartphone, title: "Mobile App Development", desc: "Build Android and iOS mobile applications (native & cross-platform) with smooth functionality, better performance, and excellent user experience." },
// //   { icon: Database, title: "Staff Augmentation", desc: "Flexible IT staff augmentation services to scale your development team according to project needs. Fill technical gaps, speed up development, and ensure successful completion." },
// // ];

// // const industries = [
// //   "Fintech & Insurance", "Education", "Retail & eCommerce", "Energy & Utilities",
// //   "Logistics & Distribution", "Healthcare", "Travel & Hospitality",
// //   "Media & Entertainment", "Public Sector", "Technology"
// // ];

// // const techStack = {
// //   backend: ["Node.js", "Java", ".NET", "PHP", "Ruby on Rails"],
// //   frontend: ["React", "Angular", "Vue.js"],
// //   database: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"],
// //   mobile: ["iOS", "Android", "Flutter", "React Native"],
// //   cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
// //   testing: ["Selenium", "Postman", "Apache JMeter", "BrowserStack"],
// // };

// // const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// // export default function SoftwareDevelopment() {
// //   return (
// //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
// //         <div className="absolute inset-0">
// //           <img
// //             src={images.hero}
// //             alt="Modern software development team coding"
// //             className="w-full h-full object-cover opacity-25 brightness-50"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
// //         </div>

// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="relative z-10 max-w-7xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
// //           >
// //             Software Development Company India
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-2xl md:text-3xl font-bold text-red-400 mb-6"
// //           >
// //             Expand your business globally by outsourcing your technology requirements to a trusted partner.
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
// //           >
// //             We provide high-quality software development services to businesses by building secure, scalable, and high-performance software solutions with excellent user experience.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Get in Touch <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
// //             </button>
// //             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
// //               View Portfolio →
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* Empower Section */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-6xl font-black mb-10"
// //           >
// //             Empower Your Business with Modern Software Development
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
// //           >
// //             Access a skilled team of developers who can transform your business and help you adapt to evolving technologies.
// //             <br /><br />
// //             By partnering with Atlas Knots IT Solution, businesses can gain a strong competitive advantage. Our team delivers reliable and efficient software development services that help increase productivity and business growth.
// //             <br /><br />
// //             We offer a wide range of services including software design, custom development, software testing, legacy system migration, product development, and many more solutions tailored to business requirements.
// //             <br /><br />
// //             Our dedicated team of developers ensures smooth business processes, improved efficiency, and long-term profitability.
// //           </motion.p>

// //           <div className="grid md:grid-cols-4 gap-8 mb-16">
// //             {["5+", "3+", "10+", "2+"].map((num, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center"
// //               >
// //                 <div className="text-6xl md:text-7xl font-black text-red-500 mb-4">{num}</div>
// //                 <p className="text-xl font-medium">
// //                   {i === 0 && "Completed Projects"}
// //                   {i === 1 && "Years of Experience"}
// //                   {i === 2 && "Global Customers"}
// //                   {i === 3 && "Countries Clients Served"}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-6xl font-black text-center mb-16"
// //           >
// //             Our Software Development <span className="text-red-500">Services</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
// //               >
// //                 <service.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
// //                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{service.title}</h3>
// //                 <p className="text-gray-300 text-lg leading-relaxed text-center">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Case Studies */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Software Development <span className="text-red-500">Case Studies</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               { title: "Media Distribution & Aggregation Platform", desc: "Interactive media distribution platform integrating social media channels, managing advertising campaigns, and collecting data into a single system." },
// //               { title: "Online Forex Trading Solution", desc: "Secure forex trading platform with real-time currency exchange, competitive rates, flexible payments, and strong financial security." },
// //               { title: "Smart City Application", desc: "IoT-connected smart city management system for monitoring environmental data, energy usage, lighting, flood detection, and air quality." },
// //             ].map((study, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.15 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 transition-all"
// //               >
// //                 <h3 className="text-2xl font-bold text-red-400 mb-6">{study.title}</h3>
// //                 <p className="text-gray-300 leading-relaxed">{study.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industries + Tech Stack */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-12"
// //           >
// //             Industries We Work With
// //           </motion.h2>

// //           <div className="flex flex-wrap justify-center gap-4 mb-20">
// //             {industries.map((ind, i) => (
// //               <motion.span
// //                 key={i}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.03 }}
// //                 className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all text-sm md:text-base"
// //               >
// //                 {ind}
// //               </motion.span>
// //             ))}
// //           </div>

// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-12"
// //           >
// //             Technology <span className="text-red-500">Stack</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {Object.entries(techStack).map(([category, techs], idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
// //               >
// //                 <h3 className="text-2xl font-bold text-red-400 mb-6 capitalize">{category}</h3>
// //                 <div className="flex flex-wrap gap-3">
// //                   {techs.map((tech, i) => (
// //                     <span key={i} className="px-4 py-2 bg-black/50 border border-red-900/30 rounded-full text-sm">
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Outsource + Why India + Why Us */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Software Outsourcing?</h2>
// //             <ul className="space-y-4 text-lg">
// //               {["Reduced software development costs", "Access to skilled developers", "Faster development process", "Access to modern technologies", "Flexible and scalable development teams", "Reduced operational risks"].map((point, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
// //                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
// //                   <span>{point}</span>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose India for Software Development?</h2>
// //             <ul className="space-y-4 text-lg">
// //               {["Cost-effective development solutions", "Highly skilled developer community", "Flexible business models", "24/7 development support for global clients", "Access to the latest technologies", "Faster project delivery"].map((point, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
// //                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
// //                   <span>{point}</span>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose Atlas Knots IT Solution?</h2>
// //             <ul className="space-y-4 text-lg">
// //               {["Clear Communication", "Scalable Teams", "Efficient Project Management", "Strong Industry Experience", "Business-Friendly Hiring Models"].map((point, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
// //                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
// //                   <span>{point}</span>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Development Process + Final CTA */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Our Development <span className="text-red-500">Process</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8 mb-20">
// //             {["Requirement Analysis", "Agile Development", "Testing and Delivery"].map((step, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.15 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 transition-all"
// //               >
// //                 <div className="text-5xl font-black text-red-500 mb-6">{`0${i + 1}`}</div>
// //                 <h3 className="text-2xl font-bold mb-4">{step}</h3>
// //                 <p className="text-gray-300">
// //                   {step === "Requirement Analysis" && "We understand your business needs and define the project roadmap."}
// //                   {step === "Agile Development" && "Our developers follow agile methods with regular updates and feedback cycles."}
// //                   {step === "Testing and Delivery" && "We conduct thorough testing before deploying the final product to ensure performance and security."}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Final CTA */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-center"
// //           >
// //             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
// //               Hire a Dedicated Software Development Team
// //             </motion.h2>

// //             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
// //               Get access to experienced developers who can build powerful web and mobile applications tailored to your business needs.
// //             </motion.p>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
// //             >
// //               Hire Us Now →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
// //         <div className="max-w-5xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl md:text-5xl font-black text-center mb-16"
// //           >
// //             Frequently Asked Questions
// //           </motion.h2>

// //           <div className="space-y-8">
// //             {[
// //               { q: "What is the cost of software development?", a: "The cost depends on the complexity, features, and timeline of the project." },
// //               { q: "Do you offer custom software development?", a: "Yes, we specialize in building custom software solutions based on business needs." },
// //               { q: "Can I hire a dedicated development team?", a: "Yes, we offer dedicated developer hiring models for businesses." },
// //               { q: "Do you provide maintenance and support?", a: "Yes, we provide post-development support and maintenance services." },
// //               { q: "Which industries do you work with?", a: "We serve industries such as healthcare, education, fintech, retail, logistics, and many others." },
// //             ].map((faq, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
// //               >
// //                 <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
// //                 <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Code, Globe, Server, Smartphone, Database, Cloud, Users } from "lucide-react";

// // High-quality images for visual appeal (Unsplash free stock - perfect fit for software dev theme)
// const images = {
//   hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern coding team
//   team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Collaborative dev team
//   codeWorkspace: "https://images.unsplash.com/photo-1555066931-bf19c9cb1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Clean code on multiple screens
//   cloudDevops: "https://images.unsplash.com/photo-1563986768609-620da13593e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Cloud infrastructure visualization
//   mobileApps: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Mobile app screens mockup
//   growthChart: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Business growth analytics
//   caseStudy: "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Data dashboard / analytics platform
// };

// const services = [
//   { icon: Code, title: "Custom Software Development", desc: "Develop software applications according to the changing needs of your business and customers. We build fully functional, feature-rich, and scalable software that solves business challenges and supports growth." },
//   { icon: Globe, title: "Web Development Services", desc: "Grow your business with custom web development solutions that match your business requirements. Secure, scalable, and high-performance web applications that integrate perfectly with your ecosystem." },
//   { icon: Cloud, title: "Cloud & DevOps Solutions", desc: "Automation and cloud technologies help businesses manage operations efficiently. Streamline workflows, improve collaboration, and accelerate development while maintaining high performance." },
//   { icon: Users, title: "Dedicated Development Team", desc: "Hire a dedicated team of experienced developers, architects, and project managers who understand your business needs and deliver real solutions." },
//   { icon: Smartphone, title: "Mobile App Development", desc: "Build Android and iOS mobile applications (native & cross-platform) with smooth functionality, better performance, and excellent user experience." },
//   { icon: Database, title: "Staff Augmentation", desc: "Flexible IT staff augmentation services to scale your development team according to project needs. Fill technical gaps, speed up development, and ensure successful completion." },
// ];

// const industries = [
//   "Fintech & Insurance", "Education", "Retail & eCommerce", "Energy & Utilities",
//   "Logistics & Distribution", "Healthcare", "Travel & Hospitality",
//   "Media & Entertainment", "Public Sector", "Technology"
// ];

// const techStack = {
//   backend: ["Node.js", "Java", ".NET", "PHP", "Ruby on Rails"],
//   frontend: ["React", "Angular", "Vue.js"],
//   database: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"],
//   mobile: ["iOS", "Android", "Flutter", "React Native"],
//   cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
//   testing: ["Selenium", "Postman", "Apache JMeter", "BrowserStack"],
// };

// const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// export default function SoftwareDevelopment() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section with Photo */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Modern software development team collaborating"
//             className="w-full h-full object-cover opacity-25 brightness-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
//         </div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative z-10 max-w-7xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
//           >
//             Software Development Company India
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-2xl md:text-3xl font-bold text-red-400 mb-6"
//           >
//             Expand your business globally by outsourcing your technology requirements to a trusted partner.
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
//           >
//             We provide high-quality software development services to businesses by building secure, scalable, and high-performance software solutions with excellent user experience.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Get in Touch <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               View Portfolio →
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Empower Section with Team Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-10 text-center"
//           >
//             Empower Your Business with Modern Software Development
//           </motion.h2>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.team}
//             alt="Dedicated software development team collaborating"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed text-center"
//           >
//             Access a skilled team of developers who can transform your business and help you adapt to evolving technologies.
//             <br /><br />
//             By partnering with Atlas Knots IT Solution, businesses can gain a strong competitive advantage. Our team delivers reliable and efficient software development services that help increase productivity and business growth.
//             <br /><br />
//             We offer a wide range of services including software design, custom development, software testing, legacy system migration, product development, and many more solutions tailored to business requirements.
//             <br /><br />
//             Our dedicated team of developers ensures smooth business processes, improved efficiency, and long-term profitability.
//           </motion.p>

//           <div className="grid md:grid-cols-4 gap-8 mb-16">
//             {["5+", "3+", "10+", "2+"].map((num, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 transition-all"
//               >
//                 <div className="text-6xl md:text-7xl font-black text-red-500 mb-4">{num}</div>
//                 <p className="text-xl font-medium">
//                   {i === 0 && "Completed Projects"}
//                   {i === 1 && "Years of Experience"}
//                   {i === 2 && "Global Customers"}
//                   {i === 3 && "Countries Clients Served"}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid with Code Workspace Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-12"
//           >
//             Our Software Development <span className="text-red-500">Services</span>
//           </motion.h2>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.codeWorkspace}
//             alt="Developers writing clean code for custom software"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <service.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{service.title}</h3>
//                 <p className="text-gray-300 text-lg leading-relaxed text-center">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies with Analytics Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Software Development <span className="text-red-500">Case Studies</span>
//           </motion.h2>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.caseStudy}
//             alt="Analytics dashboard for media and trading platforms"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Media Distribution & Aggregation Platform", desc: "Interactive media distribution platform integrating social media channels, managing advertising campaigns, and collecting data into a single system." },
//               { title: "Online Forex Trading Solution", desc: "Secure forex trading platform with real-time currency exchange, competitive rates, flexible payments, and strong financial security." },
//               { title: "Smart City Application", desc: "IoT-connected smart city management system for monitoring environmental data, energy usage, lighting, flood detection, and air quality." },
//             ].map((study, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 transition-all"
//               >
//                 <h3 className="text-2xl font-bold text-red-400 mb-6">{study.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{study.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries + Tech Stack with Cloud Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Industries We Work With
//           </motion.h2>

//           <div className="flex flex-wrap justify-center gap-4 mb-20">
//             {industries.map((ind, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.03 }}
//                 className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all text-sm md:text-base"
//               >
//                 {ind}
//               </motion.span>
//             ))}
//           </div>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Technology <span className="text-red-500">Stack</span>
//           </motion.h2>

//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             src={images.cloudDevops}
//             alt="Cloud infrastructure and DevOps technologies"
//             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {Object.entries(techStack).map(([category, techs], idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
//               >
//                 <h3 className="text-2xl font-bold text-red-400 mb-6 capitalize">{category}</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {techs.map((tech, i) => (
//                     <span key={i} className="px-4 py-2 bg-black/50 border border-red-900/30 rounded-full text-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Sections with Code Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <motion.img
//               variants={fadeInUp}
//               src={images.codeWorkspace}
//               alt="Developers writing secure code"
//               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover mb-8"
//             />
//             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Software Outsourcing?</h2>
//             <ul className="space-y-4 text-lg">
//               {["Reduced software development costs", "Access to skilled developers", "Faster development process", "Access to modern technologies", "Flexible and scalable development teams", "Reduced operational risks"].map((point, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
//                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//                   <span>{point}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose India for Software Development?</h2>
//             <ul className="space-y-4 text-lg">
//               {["Cost-effective development solutions", "Highly skilled developer community", "Flexible business models", "24/7 development support for global clients", "Access to the latest technologies", "Faster project delivery"].map((point, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
//                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//                   <span>{point}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose Atlas Knots IT Solution?</h2>
//             <ul className="space-y-4 text-lg">
//               {["Clear Communication", "Scalable Teams", "Efficient Project Management", "Strong Industry Experience", "Business-Friendly Hiring Models"].map((point, i) => (
//                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
//                   <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//                   <span>{point}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </section>

//       {/* Development Process + Final CTA with Growth Photo */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Our Development <span className="text-red-500">Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8 mb-20">
//             {["Requirement Analysis", "Agile Development", "Testing and Delivery"].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 transition-all"
//               >
//                 <div className="text-5xl font-black text-red-500 mb-6">{`0${i + 1}`}</div>
//                 <h3 className="text-2xl font-bold mb-4">{step}</h3>
//                 <p className="text-gray-300">
//                   {step === "Requirement Analysis" && "We understand your business needs and define the project roadmap."}
//                   {step === "Agile Development" && "Our developers follow agile methods with regular updates and feedback cycles."}
//                   {step === "Testing and Delivery" && "We conduct thorough testing before deploying the final product to ensure performance and security."}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.img
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               src={images.growthChart}
//               alt="Business growth through software solutions"
//               className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
//             />

//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
//               Hire a Dedicated Software Development Team
//             </motion.h2>

//             <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//               Get access to experienced developers who can build powerful web and mobile applications tailored to your business needs.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//             >
//               Hire Us Now →
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
//         <div className="max-w-5xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Frequently Asked Questions
//           </motion.h2>

//           <div className="space-y-8">
//             {[
//               { q: "What is the cost of software development?", a: "The cost depends on the complexity, features, and timeline of the project." },
//               { q: "Do you offer custom software development?", a: "Yes, we specialize in building custom software solutions based on business needs." },
//               { q: "Can I hire a dedicated development team?", a: "Yes, we offer dedicated developer hiring models for businesses." },
//               { q: "Do you provide maintenance and support?", a: "Yes, we provide post-development support and maintenance services." },
//               { q: "Which industries do you work with?", a: "We serve industries such as healthcare, education, fintech, retail, logistics, and many others." },
//             ].map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
//               >
//                 <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
//                 <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Server, Smartphone, Database, Cloud, Users } from "lucide-react";

// High-quality images for visual appeal (Unsplash free stock - perfect for software dev theme)
const images = {
  hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern coding team
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Collaborative dev team
  codeWorkspace: "https://images.unsplash.com/photo-1555066931-bf19c9cb1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Clean code on multiple screens
  cloudDevops: "https://images.unsplash.com/photo-1563986768609-620da13593e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Cloud infrastructure visualization
  mobileApps: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Mobile app screens mockup
  growthChart: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Business growth analytics
  caseStudyDashboard: "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Analytics dashboard for case studies
};

const services = [
  { icon: Code, title: "Custom Software Development", desc: "Develop software applications according to the changing needs of your business and customers. We build fully functional, feature-rich, and scalable software that solves business challenges and supports growth." },
  { icon: Globe, title: "Web Development Services", desc: "Grow your business with custom web development solutions that match your business requirements. Secure, scalable, and high-performance web applications that integrate perfectly with your ecosystem." },
  { icon: Cloud, title: "Cloud & DevOps Solutions", desc: "Automation and cloud technologies help businesses manage operations efficiently. Streamline workflows, improve collaboration, and accelerate development while maintaining high performance." },
  { icon: Users, title: "Dedicated Development Team", desc: "Hire a dedicated team of experienced developers, architects, and project managers who understand your business needs and deliver real solutions." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Build Android and iOS mobile applications (native & cross-platform) with smooth functionality, better performance, and excellent user experience." },
  { icon: Database, title: "Staff Augmentation", desc: "Flexible IT staff augmentation services to scale your development team according to project needs. Fill technical gaps, speed up development, and ensure successful completion." },
];

const industries = [
  "Fintech & Insurance", "Education", "Retail & eCommerce", "Energy & Utilities",
  "Logistics & Distribution", "Healthcare", "Travel & Hospitality",
  "Media & Entertainment", "Public Sector", "Technology"
];

const techStack = {
  backend: ["Node.js", "Java", ".NET", "PHP", "Ruby on Rails"],
  frontend: ["React", "Angular", "Vue.js"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"],
  mobile: ["iOS", "Android", "Flutter", "React Native"],
  cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  testing: ["Selenium", "Postman", "Apache JMeter", "BrowserStack"],
};

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function SoftwareDevelopment() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero Section with Photo */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Modern software development team collaborating"
            className="w-full h-full object-cover opacity-25 brightness-50"
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
            Software Development Company India
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-red-400 mb-6"
          >
            Expand your business globally by outsourcing your technology requirements to a trusted partner.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            We provide high-quality software development services to businesses by building secure, scalable, and high-performance software solutions with excellent user experience.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Get in Touch <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              View Portfolio →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Empower Section with Team Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-10 text-center"
          >
            Empower Your Business with Modern Software Development
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.team}
            alt="Dedicated software development team collaborating"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed text-center"
          >
            Access a skilled team of developers who can transform your business and help you adapt to evolving technologies.
            <br /><br />
            By partnering with Atlas Knots IT Solution, businesses can gain a strong competitive advantage. Our team delivers reliable and efficient software development services that help increase productivity and business growth.
            <br /><br />
            We offer a wide range of services including software design, custom development, software testing, legacy system migration, product development, and many more solutions tailored to business requirements.
            <br /><br />
            Our dedicated team of developers ensures smooth business processes, improved efficiency, and long-term profitability.
          </motion.p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {["5+", "3+", "10+", "2+"].map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 transition-all"
              >
                <div className="text-6xl md:text-7xl font-black text-red-500 mb-4">{num}</div>
                <p className="text-xl font-medium">
                  {i === 0 && "Completed Projects"}
                  {i === 1 && "Years of Experience"}
                  {i === 2 && "Global Customers"}
                  {i === 3 && "Countries Clients Served"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Code Workspace Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-12"
          >
            Our Software Development <span className="text-red-500">Services</span>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.codeWorkspace}
            alt="Developers writing clean code for custom software"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
          />

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
                <p className="text-gray-300 text-lg leading-relaxed text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies with Analytics Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Software Development <span className="text-red-500">Case Studies</span>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.caseStudyDashboard}
            alt="Analytics dashboard for media and trading platforms"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Media Distribution & Aggregation Platform", desc: "Interactive media distribution platform integrating social media channels, managing advertising campaigns, and collecting data into a single system." },
              { title: "Online Forex Trading Solution", desc: "Secure forex trading platform with real-time currency exchange, competitive rates, flexible payments, and strong financial security." },
              { title: "Smart City Application", desc: "IoT-connected smart city management system for monitoring environmental data, energy usage, lighting, flood detection, and air quality." },
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 transition-all"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-6">{study.title}</h3>
                <p className="text-gray-300 leading-relaxed">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + Tech Stack with Cloud Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Industries We Work With
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-6 py-3 bg-gray-900/70 border border-red-900/40 rounded-full text-gray-200 hover:bg-red-900/40 hover:border-red-600/50 transition-all text-sm md:text-base"
              >
                {ind}
              </motion.span>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Technology <span className="text-red-500">Stack</span>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.cloudDevops}
            alt="Cloud infrastructure and DevOps technologies"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-6 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-black/50 border border-red-900/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sections with Code Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.img
              variants={fadeInUp}
              src={images.codeWorkspace}
              alt="Developers writing secure code"
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Software Outsourcing?</h2>
            <ul className="space-y-4 text-lg">
              {["Reduced software development costs", "Access to skilled developers", "Faster development process", "Access to modern technologies", "Flexible and scalable development teams", "Reduced operational risks"].map((point, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose India for Software Development?</h2>
            <ul className="space-y-4 text-lg">
              {["Cost-effective development solutions", "Highly skilled developer community", "Flexible business models", "24/7 development support for global clients", "Access to the latest technologies", "Faster project delivery"].map((point, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">Why Choose Atlas Knots IT Solution?</h2>
            <ul className="space-y-4 text-lg">
              {["Clear Communication", "Scalable Teams", "Efficient Project Management", "Strong Industry Experience", "Business-Friendly Hiring Models"].map((point, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Development Process + Final CTA with Growth Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Our Development <span className="text-red-500">Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {["Requirement Analysis", "Agile Development", "Testing and Delivery"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-10 text-center hover:border-red-600/60 transition-all"
              >
                <div className="text-5xl font-black text-red-500 mb-6">{`0${i + 1}`}</div>
                <h3 className="text-2xl font-bold mb-4">{step}</h3>
                <p className="text-gray-300">
                  {step === "Requirement Analysis" && "We understand your business needs and define the project roadmap."}
                  {step === "Agile Development" && "Our developers follow agile methods with regular updates and feedback cycles."}
                  {step === "Testing and Delivery" && "We conduct thorough testing before deploying the final product to ensure performance and security."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.growthChart}
              alt="Business growth through software solutions"
              className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
            />

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
              Hire a Dedicated Software Development Team
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get access to experienced developers who can build powerful web and mobile applications tailored to your business needs.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
            >
              Hire Us Now →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              { q: "What is the cost of software development?", a: "The cost depends on the complexity, features, and timeline of the project." },
              { q: "Do you offer custom software development?", a: "Yes, we specialize in building custom software solutions based on business needs." },
              { q: "Can I hire a dedicated development team?", a: "Yes, we offer dedicated developer hiring models for businesses." },
              { q: "Do you provide maintenance and support?", a: "Yes, we provide post-development support and maintenance services." },
              { q: "Which industries do you work with?", a: "We serve industries such as healthcare, education, fintech, retail, logistics, and many others." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-4">{faq.q}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}