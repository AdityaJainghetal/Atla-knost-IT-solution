

import React, { useCallback, useRef, Suspense } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  BarChart3,
  HardDrive,
  Users,
  Briefcase,
  Headphones,
  CheckCircle,
  Server,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sphere,
  Box,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

// ────────────────────────────────────────────────
// 3D COMPONENTS (unchanged)
// ────────────────────────────────────────────────

const AnimatedSphere = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const RotatingCubes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const cubes = [];
  const radius = 3;
  const count = 8;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    cubes.push(
      <Box key={i} position={[x, 0, z]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
      </Box>
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
};

const FloatingParticles3D = () => {
  const particlesRef = useRef();
  const count = 200;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3]     = 0.86;
    colors[i * 3 + 1] = 0.15;
    colors[i * 3 + 2] = 0.15;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"     count={count} array={colors}     itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
};

const HeroScene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} color="#f87171" />
      <FloatingParticles3D />
      <AnimatedSphere position={[-3, 2, -2]} color="#dc2626" />
      <AnimatedSphere position={[3, -2, -1]} color="#ef4444" />
      <AnimatedSphere position={[0, 3, 1]} color="#f87171" />
      <RotatingCubes />
      <Environment preset="city" />
    </>
  );
};

// ────────────────────────────────────────────────
// PARTICLES + VARIANTS (unchanged)
// ────────────────────────────────────────────────

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#dc2626", "#ef4444", "#f87171"] },
    links: { color: "#dc2626", distance: 140, enable: true, opacity: 0.15, width: 1 },
    move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1.2, straight: false },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4 } },
};

// ────────────────────────────────────────────────
// MAIN HOME COMPONENT
// ────────────────────────────────────────────────

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particles + Gradient Background */}
      <div className="fixed inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
      </div>

      {/* ─── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <HeroScene3D />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0" />
        <div className="absolute inset-0 bg-red-950/15 mix-blend-multiply z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            ATLA KNOTS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
              IT SOLUTIONS
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Making technology impactful, dependable, and easy to use — for businesses of all sizes.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We build secure, future-ready software that drives efficiency and digital transformation.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50">
              GET STARTED
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group relative inline-flex items-center gap-3 px-8 py-5 border border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-950/30">
              VIEW OUR WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-sm text-gray-500 tracking-widest">SCROLL</span>
        </motion.div>
      </section>

      {/* ─── Services Section ──────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-6">
            OUR <span className="text-red-500">SERVICES</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive IT & BPO solutions — from development to support and infrastructure
          </motion.p>

          <div className="space-y-20">
            {/* 1. IT Services */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-red-400 text-center tracking-tight">
                1. Information Technology Services
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
                Supporting companies at every stage of the product lifecycle.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <Code className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Development</h4>
                  <ul className="text-gray-300 space-y-3 text-sm md:text-base w-full max-w-xs">
                    <li>• Web application development</li>
                    <li>• Mobile application development</li>
                    <li>• Secure, scalable & user-friendly solutions</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Testing</h4>
                  <ul className="text-gray-300 space-y-3 text-sm md:text-base w-full max-w-xs">
                    <li>• Web application testing</li>
                    <li>• Mobile application testing</li>
                    <li>• Quality, performance & security assurance</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <Users className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">L2 Support</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xs">
                    Advanced troubleshooting, in-depth diagnosis & root cause resolution for complex issues.
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <Server className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Product Assistance</h4>
                  <ul className="text-gray-300 space-y-3 text-sm md:text-base w-full max-w-xs">
                    <li>• Continuous support & maintenance</li>
                    <li>• Ticket & incident management</li>
                    <li>• Change management & SLA tracking</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 2. BPO Services */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-red-400 text-center tracking-tight">
                2. Business Process Outsourcing (BPO) Services
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                Streamline operations and enhance customer engagement with reliable, scalable support.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <Headphones className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Voice, Chat & Email</h4>
                  <ul className="text-gray-300 space-y-3 text-sm md:text-base w-full max-w-xs">
                    <li>• Inbound & outbound voice support</li>
                    <li>• Real-time chat assistance</li>
                    <li>• Structured email & ticketing</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <BarChart3 className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Cataloguing & Enrichment</h4>
                  <ul className="text-gray-300 space-y-3 text-sm md:text-base w-full max-w-xs">
                    <li>• Product descriptions, tags & keywords</li>
                    <li>• Data validation & cleaning</li>
                    <li>• Category & attribute enrichment</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={scaleOnHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
                >
                  <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-red-500 mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold mb-5 text-white">Quality Assurance</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xs">
                    Call/chat audits, SOP/SLA compliance, feedback, coaching & continuous improvement.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 3. Infrastructure */}
            <div className="text-center max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-red-400 tracking-tight">
                3. Support & Infrastructure Setup
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony, servers, workstations, robust security, and power backup — built for reliability and scale.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Why Choose Us ──────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-center mb-16">
            WHY <span className="text-red-500">CHOOSE US</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
            {[
              { icon: Users,     title: "True Partnership",     desc: "We become an extension of your team — understanding your business deeply." },
              { icon: Briefcase,  title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
              { icon: HardDrive,  title: "Long-term Support",    desc: "24×7 production support, SLA-based maintenance & AMS." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-900/80 mb-8 mx-auto">
                  <item.icon className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold mb-5">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}