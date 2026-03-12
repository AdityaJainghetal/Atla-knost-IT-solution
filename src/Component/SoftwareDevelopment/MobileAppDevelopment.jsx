// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Smartphone, Code, Globe, CheckCircle } from "lucide-react";

// // Random high-quality images (replace with your own when ready)
// const images = {
//   hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   mobileDev: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   appScreens: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   teamCoding: "https://images.unsplash.com/photo-1555066931-bf19c9cb1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//   processFlow: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
// };

// const services = [
//   {
//     title: "Android Application Development",
//     desc: "We utilize the full potential of the Android platform, using technologies like Java and Kotlin to develop smooth, reliable, and feature-rich applications. Our team follows the best practices in UI/UX design and uses advanced development tools to ensure your application meets high standards of performance and usability. From concept to final deployment, we focus on delivering Android applications that engage users and improve business productivity.",
//   },
//   {
//     title: "iOS Application Development",
//     desc: "Our iOS application development services use technologies such as Swift and Objective-C to build innovative and user-friendly applications for iPhones, iPads, and Apple devices. Using industry-leading tools like Xcode, we develop applications that are visually appealing, highly functional, and compatible with the latest iOS versions. Whether your goal is to target customers or improve business operations, we develop iOS applications that meet your expectations.",
//   },
//   {
//     title: "Hybrid Application Development",
//     desc: "Our hybrid app development services combine modern web technologies with native app capabilities to create cross-platform applications that run smoothly on both Android and iOS devices. Using frameworks like React Native and Ionic, we ensure that hybrid apps maintain the look and feel of native applications while offering faster development and cost-effective solutions. With our expertise in hybrid development, businesses can reach a larger audience without compromising performance or user experience.",
//   },
// ];

// const benefits = [
//   "Enhance customer engagement",
//   "Expand your market reach",
//   "Streamline business processes",
//   "Increase sales and revenue",
// ];

// const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida"];

// const industries = [
//   "Finance", "Manufacturing", "Legal & Law", "Technology & IT",
//   "Transportation & Automotive", "eCommerce & Retail",
//   "Non-Profit Organizations", "Tourism & Hospitality",
//   "Medical & Healthcare", "Event Management", "Real Estate", "Many More",
// ];

// const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// export default function MobileAppDevelopment() {
//   return (
//     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
//         <div className="absolute inset-0">
//           <img
//             src={images.hero}
//             alt="Mobile app development workspace in Bhopal"
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
//             Mobile Application Development
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl font-bold text-red-400 mb-6"
//           >
//             App Development Services in Bhopal
//           </motion.p>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
//           >
//             Our mobile application services include enriching customer experience, increasing market reach, and simplifying business processes to create the perfect balance for businesses across different industries.
//             <br /><br />
//             At Atlas Knots IT Solution, we are known for delivering reliable and innovative Mobile App Development Services in Bhopal. If you are a business professional looking to grow, innovate, and transform your ideas into digital products, we are the technology partner you can trust.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
//               Contact Us <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
//               View Our Work →
//             </button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Mobile App Development Offering */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-center mb-16"
//           >
//             Mobile App Development <span className="text-red-500">Offering</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
//           >
//             Our Atlas Knots IT Solution team offers a wide range of mobile app development services to meet the diverse requirements of businesses.
//           </motion.p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group"
//               >
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 text-center">{service.title}</h3>
//                 <p className="text-gray-300 text-lg leading-relaxed text-center">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 text-center"
//           >
//             <h3 className="text-3xl font-bold mb-8">With Our App Development Services, You Can:</h3>
//             <div className="flex flex-wrap justify-center gap-6">
//               {benefits.map((benefit, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   className="bg-gray-900/60 border border-red-900/40 rounded-xl px-8 py-5 text-lg font-medium hover:border-red-600/60 transition-all"
//                 >
//                   {benefit}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Development Pathway */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-16"
//           >
//             Roadmap to our App Development <span className="text-red-500">Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {[
//               { step: "Discovery and Planning", points: ["Interacting with clients to understand their requirements and business objectives", "Conducting market research and competitor analysis", "Defining the target audience and key features of the application", "Planning project timelines and milestones"] },
//               { step: "Design", points: ["Creating wireframes and designing UX and UI interfaces", "Developing the app’s visual identity including colours, typography, and graphics", "Building interactive prototypes to demonstrate the application workflow"] },
//               { step: "Development", points: ["Implementing functionalities based on finalised designs", "Performing front-end and back-end development", "Continuous testing and improvements to ensure proper functionality"] },
//               { step: "Testing and Quality Assurance", points: ["Conducting detailed testing to identify bugs and technical issues", "Ensuring device compatibility across multiple platforms", "Monitoring security, performance, and overall user experience"] },
//               { step: "Maintenance and Updates", points: ["Monitoring application performance after launch", "Fixing bugs and addressing user feedback", "Updating applications to support new operating system versions", "Performing regular security updates and improvements"] },
//             ].map((phase, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.15 }}
//                 className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all"
//               >
//                 <div className="text-4xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
//                 <h3 className="text-2xl font-bold mb-6 text-center">{phase.step}</h3>
//                 <ul className="space-y-3 text-gray-300 text-sm">
//                   {phase.points.map((point, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries + Cities */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black text-center mb-12"
//           >
//             Tailored Solutions for Different <span className="text-red-500">Industries</span>
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
//             Serving Across Major <span className="text-red-500">Cities</span>
//           </motion.h2>

//           <div className="flex flex-wrap justify-center gap-4">
//             {cities.map((city, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.03 }}
//                 className="px-8 py-4 bg-gray-900/70 border border-red-900/40 rounded-xl text-xl font-medium hover:border-red-600/60 transition-all"
//               >
//                 {city}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-950/50 to-transparent">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black mb-10"
//           >
//             What Are You Waiting For?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             Our experienced developers at Atlas Knots IT Solution create user-friendly and high-performance mobile applications that help businesses grow and succeed in the digital world.
//             <br /><br />
//             Let us help you build the right mobile application for your business success.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
//           >
//             Contact Us →
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code, Globe, CheckCircle } from "lucide-react";

// High-quality images for visual appeal (Unsplash free stock)
const images = {
  hero: "https://images.unsplash.com/photo-1551650975-60cb6b6d2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern mobile app workspace
  android: "https://images.unsplash.com/photo-1607252650355-f2a0a3a5a2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Android app screens
  ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // iOS device mockup
  hybrid: "https://images.unsplash.com/photo-1551651055-1e6e6d5b4a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Cross-platform app development
  process: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Development roadmap illustration
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Team working on apps
};

const services = [
  {
    title: "Android Application Development",
    desc: "We utilize the full potential of the Android platform, using technologies like Java and Kotlin to develop smooth, reliable, and feature-rich applications. Our team follows the best practices in UI/UX design and uses advanced development tools to ensure your application meets high standards of performance and usability. From concept to final deployment, we focus on delivering Android applications that engage users and improve business productivity.",
  },
  {
    title: "iOS Application Development",
    desc: "Our iOS application development services use technologies such as Swift and Objective-C to build innovative and user-friendly applications for iPhones, iPads, and Apple devices. Using industry-leading tools like Xcode, we develop applications that are visually appealing, highly functional, and compatible with the latest iOS versions. Whether your goal is to target customers or improve business operations, we develop iOS applications that meet your expectations.",
  },
  {
    title: "Hybrid Application Development",
    desc: "Our hybrid app development services combine modern web technologies with native app capabilities to create cross-platform applications that run smoothly on both Android and iOS devices. Using frameworks like React Native and Ionic, we ensure that hybrid apps maintain the look and feel of native applications while offering faster development and cost-effective solutions. With our expertise in hybrid development, businesses can reach a larger audience without compromising performance or user experience.",
  },
];

const benefits = [
  "Enhance customer engagement",
  "Expand your market reach",
  "Streamline business processes",
  "Increase sales and revenue",
];

const cities = ["Bhopal", "Indore", "Delhi", "Pune", "Jaipur", "Gurgaon", "Noida"];

const industries = [
  "Finance", "Manufacturing", "Legal & Law", "Technology & IT",
  "Transportation & Automotive", "eCommerce & Retail",
  "Non-Profit Organizations", "Tourism & Hospitality",
  "Medical & Healthcare", "Event Management", "Real Estate", "Many More",
];

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function MobileAppDevelopment() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero Section with Photo */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Mobile app development team working in Bhopal"
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
            Mobile Application Development
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-red-400 mb-6"
          >
            App Development Services in Bhopal
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Our mobile application services include enriching customer experience, increasing market reach, and simplifying business processes to create the perfect balance for businesses across different industries.
            <br /><br />
            At Atlas Knots IT Solution, we are known for delivering reliable and innovative Mobile App Development Services in Bhopal. If you are a business professional looking to grow, innovate, and transform your ideas into digital products, we are the technology partner you can trust.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Contact Us <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              View Our Work →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section with Photos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Mobile App Development <span className="text-red-500">Offering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 text-center mb-16 max-w-5xl mx-auto leading-relaxed"
          >
            Our Atlas Knots IT Solution team offers a wide range of mobile app development services to meet the diverse requirements of businesses.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img
                    src={idx === 0 ? images.android : idx === 1 ? images.ios : images.hybrid}
                    alt={`${service.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 text-center relative z-10">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed text-center relative z-10">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-8">With Our App Development Services, You Can:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-gray-900/60 border border-red-900/40 rounded-xl px-8 py-5 text-lg font-medium hover:border-red-600/60 transition-all"
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process with Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6">
              Roadmap to our App Development <span className="text-red-500">Process</span>
            </motion.h2>
            <motion.img
              variants={fadeInUp}
              src={images.process}
              alt="App development process roadmap illustration"
              className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "Discovery and Planning", points: ["Interacting with clients to understand their requirements and business objectives", "Conducting market research and competitor analysis", "Defining the target audience and key features of the application", "Planning project timelines and milestones"] },
              { step: "Design", points: ["Creating wireframes and designing UX and UI interfaces", "Developing the app’s visual identity including colours, typography, and graphics", "Building interactive prototypes to demonstrate the application workflow"] },
              { step: "Development", points: ["Implementing functionalities based on finalised designs", "Performing front-end and back-end development", "Continuous testing and improvements to ensure proper functionality"] },
              { step: "Testing and Quality Assurance", points: ["Conducting detailed testing to identify bugs and technical issues", "Ensuring device compatibility across multiple platforms", "Monitoring security, performance, and overall user experience"] },
              { step: "Maintenance and Updates", points: ["Monitoring application performance after launch", "Fixing bugs and addressing user feedback", "Updating applications to support new operating system versions", "Performing regular security updates and improvements"] },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all min-h-[320px]"
              >
                <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
                <h3 className="text-2xl font-bold mb-6 text-center">{phase.step}</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {phase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + Cities with Photos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Tailored Solutions for Different <span className="text-red-500">Industries</span>
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
            Serving Across Major <span className="text-red-500">Cities</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {cities.map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-10 py-5 bg-gray-900/70 border border-red-900/40 rounded-xl text-xl font-bold hover:border-red-600/60 transition-all shadow-lg"
              >
                {city}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Photo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-950/50 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={images.team}
            alt="Mobile app development team at Atlas Knots IT Solution"
            className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto max-w-4xl w-full object-cover mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-10"
          >
            What Are You Waiting For?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Our experienced developers at Atlas Knots IT Solution create user-friendly and high-performance mobile applications that help businesses grow and succeed in the digital world.
            <br /><br />
            Let us help you build the right mobile application for your business success.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all"
          >
            Contact Us →
          </motion.button>
        </div>
      </section>
    </div>
  );
}