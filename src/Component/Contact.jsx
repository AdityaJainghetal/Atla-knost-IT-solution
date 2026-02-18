import React, { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, Clock, Send } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 3 },
      repulse: { distance: 120, duration: 0.4 },
    },
  },
  
  particles: {
    color: { value: ["#ef4444", "#f87171", "#dc2626"] },
    links: {
      color: "#ffffff",
      distance: 130,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 60 },
    opacity: { value: 0.45 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 130, damping: 15 },
  },
};

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [formData, setFormData] = useState({
    usernamee: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://atla-knots-solution-admin-2.onrender.com/api/contact/create",
        formData,
      );

      toast.success(
        "Message sent successfully! We'll get back to you soon.",
        toastConfig,
      );
      setFormData({ usernamee: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);

      let errorMsg = "Something went wrong. Please try again.";

      if (error.response) {
        errorMsg =
          error.response.data?.message ||
          error.response.data?.error ||
          errorMsg;
      } else if (error.request) {
        errorMsg =
          "No response from server. Please check if backend is running.";
      }

      toast.error(errorMsg, { ...toastConfig, autoClose: 7000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      <ToastContainer {...toastConfig} />

      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-950/25 to-red-900/10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Have questions or ready to start a project? We're here to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-20 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Left - Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-red-900/25 border border-red-800/40 rounded-xl">
                      <Building2 className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Our Office
                      </h3>
                      <p className="mt-1.5 text-gray-300 leading-relaxed">
                        103, Goyal Vihar,
                        <br />
                        Plot No 31-C, Zone 2,
                        <br />
                        M.P. Nagar, Bhopal - 462011
                        <br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-red-900/25 border border-red-800/40 rounded-xl">
                      <Phone className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Phone
                      </h3>
                      <p className="mt-1.5 text-gray-300">
                        <a
                          href="tel:+917869636070"
                          className="hover:text-red-400 transition"
                        >
                          +91 78696 36070
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-red-900/25 border border-red-800/40 rounded-xl">
                      <Mail className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Email
                      </h3>
                      <p className="mt-1.5 text-gray-300">
                        <a
                          href="mailto:ATLAknotssolution@gmail.com"
                          className="hover:text-red-400 transition"
                        >
                          ATLAknotssolution@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-red-900/25 border border-red-800/40 rounded-xl">
                      <Clock className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Working Hours
                      </h3>
                      <p className="mt-1.5 text-gray-300">
                        Mon – Sat: 10:00 AM – 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form + Map */}
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-gray-950/70 border border-gray-800 rounded-2xl p-7 md:p-9 backdrop-blur-sm shadow-xl shadow-red-950/25"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-7">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="usernamee"
                        value={formData.usernamee}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        disabled={loading}
                        className="w-full px-4 py-3.5 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        disabled={loading}
                        className="w-full px-4 py-3.5 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone (Optional)"
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 disabled:opacity-60 transition"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your Message..."
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-gray-900/60 border border-gray-700 rounded-lg focus:border-red-500 text-white placeholder-gray-500 resize-none disabled:opacity-60 transition"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all flex items-center justify-center gap-2.5 ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:from-red-700 hover:to-rose-700 hover:shadow-red-600/40 hover:-translate-y-0.5"
                      }`}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={18} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gray-950/70 border border-gray-800 rounded-2xl overflow-hidden shadow-xl shadow-red-950/25 h-80 md:h-96"
                >
                  <iframe
                    title="ATLA Knots Solution - MP Nagar, Bhopal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
