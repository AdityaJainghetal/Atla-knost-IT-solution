
// import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshDistortMaterial,
//   Sphere,
//   Box,
//   Environment,
//   PerspectiveCamera,
// } from "@react-three/drei";
// import * as THREE from "three";
// import { ArrowRight, ExternalLink } from "lucide-react";

// // Images
// import img1 from "../Mobile/img/recentnewimage.png";
// import img2 from "../Mobile/img/recent4.jpg";
// import img3 from "../Mobile/img/Generatedimage.png";
// import img4 from "../Mobile/img/generatedimage2.jpg";
// import img5 from "../Mobile/img/generatedimage4.jpg";
// import img6 from "../Mobile/img/recent8.jpg";
// import img7 from "../Mobile/img/generatedimage3.jpg";
// import img8 from "../Mobile/img/recent10.jpg";
// import img9 from "../Mobile/img/recentimagenew2.jpg";

// const AnimatedSphere = ({ position, color }) => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.18;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
//     }
//   });

//   return (
//     <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
//       <Sphere ref={meshRef} args={[1.1, 64, 64]} position={position}>
//         <MeshDistortMaterial
//           color={color}
//           distort={0.35}
//           speed={1.8}
//           roughness={0.25}
//           metalness={0.85}
//         />
//       </Sphere>
//     </Float>
//   );
// };

// const RotatingCubes = () => {
//   const groupRef = useRef();

//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
//     }
//   });

//   const cubes = [];
//   const radius = 3;
//   const count = 8;

//   for (let i = 0; i < count; i++) {
//     const angle = (i / count) * Math.PI * 2;
//     const x = Math.cos(angle) * radius;
//     const z = Math.sin(angle) * radius;

//     cubes.push(
//       <Box key={i} position={[x, 0, z]} args={[0.3, 0.3, 0.3]}>
//         <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
//       </Box>
//     );
//   }

//   return <group ref={groupRef}>{cubes}</group>;
// };

// const FloatingParticles3D = () => {
//   const particlesRef = useRef();
//   const count = 200;

//   const positions = new Float32Array(count * 3);
//   const colors = new Float32Array(count * 3);

//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 20;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

//     colors[i * 3] = 0.86;
//     colors[i * 3 + 1] = 0.15;
//     colors[i * 3 + 2] = 0.15;
//   }

//   useFrame((state) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
//       particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={count}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
//     </points>
//   );
// };

// const Scene3D = () => {
//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 9]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.4}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//       <ambientLight intensity={0.6} />
//       <pointLight position={[10, 10, 10]} intensity={1.2} color="#dc2626" />
//       <pointLight position={[-10, -10, -10]} intensity={0.7} color="#ef4444" />
//       <FloatingParticles3D />
//       <AnimatedSphere position={[-3.5, 2.5, -2]} color="#dc2626" />
//       <AnimatedSphere position={[3.5, -2.5, -1.5]} color="#ef4444" />
//       <AnimatedSphere position={[0, 3.2, 1.2]} color="#f87171" />
//       <RotatingCubes />
//       <Environment preset="city" />
//     </>
//   );
// };

// const particlesOptions = {
//   fullScreen: { enable: false },
//   background: { color: { value: "transparent" } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: { enable: true, mode: "repulse" },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ["#dc2626", "#ef4444", "#f87171"] },
//     links: {
//       color: "#dc2626",
//       distance: 140,
//       enable: true,
//       opacity: 0.15,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: { default: "bounce" },
//       random: true,
//       speed: 1.2,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.3 },
//     shape: { type: "circle" },
//     size: { value: { min: 1, max: 3 } },
//   },
//   detectRetina: true,
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.14 } },
// };

// const portfolioItems = [
//   {
//     id: "1561",
//     title: "Parineek",
//     categories: ["Consultancy", "Global Business", "Industrial", "UI/UX"],
//     image: img1,
//     link: "https://parineek.com", // ← Replace with real link
//   },
//   {
//     id: "1554",
//     title: "Nova Quinta",
//     categories: ["Consultancy", "Corporate", "Global Business", "UI/UX"],
//     image: img2,
//     link: "https://novaquinta.com",
//   },
//   {
//     id: "1541",
//     title: "FirstMeridian",
//     categories: ["Consultancy", "Resourcing"],
//     image: img3,
//     link: "https://firstmeridian.com",
//   },
//   {
//     id: "1533",
//     title: "AIOne Health",
//     categories: ["Consultancy", "Corporate", "Medical", "SAAS", "Software", "UI/UX"],
//     image: img6,
//     link: "https://aionehealth.com",
//   },
//   {
//     id: "1522",
//     title: "Clanbridge",
//     categories: ["Hospitality", "Lifestyle", "Real Estate", "UI/UX"],
//     image: img4,
//     link: "https://clanbridge.com",
//   },
//   {
//     id: "1477",
//     title: "Acutok",
//     categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
//     image: img5,
//     link: "https://acutok.com",
//   },
//   {
//     id: "1473",
//     title: "MentorPOS",
//     categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
//     image: img8,
//     link: "https://mentorpos.com",
//   },
//   {
//     id: "1456",
//     title: "Alankaram",
//     categories: ["Ecommerce", "Furniture", "Lifestyle"],
//     image: img7,
//     link: "https://alankaram.in",
//   },
//   {
//     id: "1517",
//     title: "Aaalay",
//     categories: ["Consultancy", "SAAS", "Software", "UI/UX"],
//     image: img9,
//     link: "https://aaalay.com",
//   },
// ];

// const allCategories = ["All", ...new Set(portfolioItems.flatMap((item) => item.categories))];

// export default function RecentWork() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredItems = useMemo(() => {
//     if (activeFilter === "All") return portfolioItems;
//     return portfolioItems.filter((item) => item.categories.includes(activeFilter));
//   }, [activeFilter]);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
//       {/* Background layers */}
//       <div className="absolute inset-0 z-0" style={{ height: "calc(100vh + 3400px)" }}>
//         <div className="absolute inset-0">
//           <Canvas>
//             <Suspense fallback={null}>
//               <Scene3D />
//             </Suspense>
//           </Canvas>
//         </div>

//         <div className="absolute inset-0 pointer-events-none">
//           <Particles id="tsparticles-work" init={particlesInit} options={particlesOptions} />
//         </div>

//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="absolute top-16 right-4 md:right-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-red-600/20 rounded-full blur-3xl " />
//           <div className="absolute bottom-20 left-4 md:left-24 w-80 h-80 md:w-[480px] md:h-[480px] bg-rose-800/15 rounded-full blur-3xl  delay-1000" />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 z-10 pointer-events-none" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-20">
//         {/* Hero Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="text-center mb-16 md:mb-20"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight"
//           >
//             OUR{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-600">
//               RECENT WORK
//             </span>
//           </motion.h1>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
//           >
//             Crafting high-impact digital experiences that drive growth across industries.
//           </motion.p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-12 md:mb-16">
//           {allCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveFilter(cat)}
//               className={`
//                 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider
//                 border transition-all duration-300
//                 ${
//                   activeFilter === cat
//                     ? "bg-red-600/90 border-red-500 text-white shadow-lg shadow-red-900/50"
//                     : "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
//                 }
//               `}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Portfolio Grid - adjusted spacing */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 pb-0 mb-0">
//           {filteredItems.length === 0 ? (
//             <div className="col-span-full text-center py-20 text-gray-400 text-xl">
//               No projects match this filter.
//             </div>
//           ) : (
//             filteredItems.map((item) => (
//               <motion.a
//                 key={item.id}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-80px" }}
//                 transition={{ duration: 0.7 }}
//                 className="group block break-inside-avoid cursor-pointer pb-4 md:pb-6"
//               >
//                 <div
//                   className={`
//                     relative overflow-hidden rounded-xl md:rounded-2xl
//                     bg-gray-900/40 backdrop-blur-sm
//                     border border-gray-800/60
//                     shadow-xl shadow-black/50
//                     transition-all duration-500
//                     hover:shadow-2xl hover:shadow-red-900/40
//                     hover:-translate-y-2
//                   `}
//                 >
//                   <div className="relative w-full aspect-[4/3] overflow-hidden">
//                     <div
//                       className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
//                       style={{ backgroundImage: `url(${item.image})` }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
//                     <div
//                       className={`
//                         absolute inset-0 z-20
//                         bg-white/10 backdrop-blur-sm
//                         opacity-0 group-hover:opacity-70
//                         transition-opacity duration-500
//                       `}
//                     />
//                     <div
//                       className={`
//                         absolute inset-0 z-30
//                         flex flex-col items-center justify-center px-5 text-center
//                         opacity-0 group-hover:opacity-100
//                         translate-y-6 group-hover:translate-y-0
//                         transition-all duration-700 ease-out
//                       `}
//                     >
//                       <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-xl">
//                         {item.title}
//                       </h3>
//                       <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-red-100/90 drop-shadow-lg">
//                         {item.categories.slice(0, 3).join(" • ")}
//                         {item.categories.length > 3 && " • +more"}
//                       </p>
//                       <div className="mt-5 flex items-center gap-2 text-white/90 text-sm font-medium">
//                         <span>View Project</span>
//                         <ExternalLink size={18} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.a>
//             ))
//           )}
//         </div>

//         {/* CTA Section - reduced top margin */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-center mt-12 md:mt-16 lg:mt-20 pb-4 md:pb-6"
//         >
//           <h2 className="text-4xl md:text-5xl font-black mb-6">
//             Ready to Start <span className="text-red-500">Your Project</span>?
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
//             Let's create something powerful together.
//           </p>
//           <a
//             href="/contact"
//             className={`
//               inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5
//               bg-gradient-to-r from-red-600 to-rose-600
//               hover:from-red-700 hover:to-rose-700
//               rounded-full text-lg md:text-xl font-bold
//               shadow-2xl shadow-red-900/50 pb-10
//               transition-all duration-400 hover:-translate-y-2 hover:shadow-red-800/60
//             `}
//           >
//             Let's Talk
//             <ArrowRight size={22} />
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
import img9 from "../Mobile/img/recentimagenew2.jpg";

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