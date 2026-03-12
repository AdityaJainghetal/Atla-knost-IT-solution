import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Image as ImageIcon, Video, CheckCircle } from "lucide-react";

// Random high-quality images (replace with your own when ready)
const images = {
  hero: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  designer: "https://images.unsplash.com/photo-1558655146-9f40138f37f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  logoProcess: "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  socialGraphics: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  videoEdit: "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
};

const services = [
  {
    icon: Palette,
    title: "Logo Designing",
    desc: "Your logo is the face of your brand. We design unique logos that represent your business values and help people remember your brand easily.",
  },
  {
    icon: ImageIcon,
    title: "Image Designing",
    desc: "Our designers create eye-catching images for social media, websites, advertisements, and marketing campaigns.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Videos are one of the most powerful ways to communicate online. We edit and create professional videos that engage your audience and promote your brand.",
  },
];

const whyImportant = [
  "Create a memorable brand identity",
  "Attract customers quickly",
  "Communicate your message clearly",
  "Build trust with your audience",
  "Promote products and services effectively",
];

const whyChoose = [
  "Creative and Experienced Designers – Our team combines creativity and experience to design visuals that represent your brand perfectly.",
  "Unique and Custom Designs – Every design we create is unique and tailored to your business identity.",
  "Focus on Brand Identity – We create designs that help build a strong and recognizable brand image.",
  "Timely Delivery – We respect your time and ensure that your design projects are delivered within the promised timeline.",
];

const howHelpGrow = [
  "Get high-quality graphic designs at affordable pricing for your business or product launch.",
  "Our designers bring creative ideas that help your brand stand out from competitors.",
  "Our designs help establish a strong and professional brand identity.",
  "We create visuals that increase brand awareness and attract more customers.",
];

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function GraphicDesigning() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Creative graphic designer workspace"
            className="w-full h-full object-cover opacity-25 brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
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
            Creative Graphic Design Services That Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Strong Brand Identity
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            At Atlas Knots IT Solution, we believe graphic design is more than just making things look good. It is about showing your business message clearly through visuals.
            <br /><br />
            A good design can tell your story, build trust, and help people remember your brand.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group">
              Start Your Project <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 border-2 border-red-600/70 text-red-400 rounded-full text-xl md:text-2xl font-bold hover:bg-red-950/50 transition-all">
              View Portfolio →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            Our Graphic Designing <span className="text-red-500">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gray-900/70 backdrop-blur-sm border border-red-900/40 rounded-2xl p-10 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
              >
                <service.icon className="w-16 h-16 md:w-20 md:h-20 text-red-500 mx-auto mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Important + Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Why Graphic Design Is Important for Your Business
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Graphic design plays an important role in how people see and understand your brand.
              <br /><br />
              A strong visual design can help your business:
            </p>

            <ul className="space-y-5 text-lg">
              {whyImportant.map((point, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                  <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-10 text-lg text-gray-300">
              At Atlas Knots IT Solution, we focus on creating designs that are creative, clear, and aligned with your business goals.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.designer}
            alt="Graphic designer creating brand visuals"
            className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
          />
        </div>
      </section>

      {/* Lasting Impression + Social Graphics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-12"
          >
            Designs That Leave a Lasting Impression
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Our graphic designers spend time understanding your business, your audience, and your brand message before creating any design.
                <br /><br />
                We make sure every design:
              </p>

              <ul className="space-y-5 text-lg mb-10">
                {["Matches your brand identity", "Communicates your message clearly", "Looks modern and attractive", "Works well on digital platforms and print materials"].map((point, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                    <CheckCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-xl text-gray-300 leading-relaxed">
                From logos and marketing creatives to promotional graphics and videos, we design visuals that help businesses connect with their audience and grow their brand.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.socialGraphics}
              alt="Creative social media graphics and branding examples"
              className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Solutions for Every Business + Video Editing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.videoEdit}
            alt="Professional video editing interface for brand content"
            className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
          />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Graphic Design Solutions for Every Business
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you are a startup, small business, or established company, we provide graphic design solutions that match your needs.
              <br /><br />
              Our team works with businesses from different industries and creates designs that help promote:
            </p>

            <ul className="space-y-4 text-lg mb-10">
              {["Brands", "Products", "Services", "Marketing campaigns"].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                  <span className="text-red-500 text-2xl">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-xl text-gray-300 leading-relaxed">
              Our goal is simple — create designs that people notice, remember, and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Why Choose Atlas Knots IT Solution for <span className="text-red-500">Graphic Designing?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all"
              >
                <div className="text-5xl font-black text-red-500 mb-6 opacity-80">{`0${idx + 1}`}</div>
                <p className="text-lg font-medium leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Designs Help Grow + CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            How Our Designs Help Your Business Grow
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {howHelpGrow.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600 transition-all"
              >
                <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
                <p className="text-lg leading-relaxed">{point}</p>
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-10">
              Let’s Create Designs That <span className="text-red-500">Represent Your Brand</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              At Atlas Knots IT Solution, we believe every business deserves designs that reflect its true identity.
              <br /><br />
              If you are looking for creative, reliable, and professional graphic designing services, our team is ready to help.
              <br /><br />
              Connect with us today and let’s create designs that help your brand look better, communicate better, and grow faster.
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

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/60">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Frequently Asked Questions (FAQ)
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                q: "What graphic design services does Atlas Knots IT Solution provide?",
                a: "At Atlas Knots IT Solution, we provide a wide range of graphic design services including logo design, social media creatives, marketing banners, brand identity design, promotional graphics, and video editing. Our goal is to create visuals that represent your brand and attract your audience.",
              },
              {
                q: "Why is graphic design important for my business?",
                a: "Graphic design helps your business create a strong first impression. Good visuals make your brand look professional, help people remember your business, and communicate your message clearly to customers.",
              },
              {
                q: "Do you create social media graphics for marketing?",
                a: "Yes, we design creative social media posts, ad creatives, banners, and promotional graphics that help businesses increase engagement and reach more people online.",
              },
              {
                q: "Do you provide affordable graphic design services?",
                a: "Yes. Atlas Knots IT Solution offers cost-effective graphic design services suitable for startups, small businesses, and growing companies.",
              },
              {
                q: "How can I start a graphic design project with Atlas Knots IT Solution?",
                a: "You can simply contact our team through our website or phone. We will discuss your requirements, understand your brand needs, and start creating designs that fit your business goals.",
              },
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