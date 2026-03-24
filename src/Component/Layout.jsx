import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Chatbot from "../Component/Chatbot/Chatbot";   // ← New Import

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white antialiased">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-zinc-800/70">
        <Navbar />
      </header>

      {/* Main Content - FULL SCREEN */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900">
        <Footer />
      </footer>

      {/* Global Chatbot - Always visible on every page */}
      <Chatbot />
    </div>
  );
};

export default Layout;