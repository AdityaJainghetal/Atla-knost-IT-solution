import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import FitnessApp from "./Component/Mobile/Fitnessapplanding";
import MobileOnboarding from "./Component/Mobile/Mobilebraing";
import FitnessAppLanding from "./Component/Mobile/Fitnessapplanding";
import Technology from "./Technology/Technology";
import TechNews from "./Technology/TechNews";
import RecentWork from "./Component/Recentwork/Recentwork";
import CareerPage from "./Component/Carrer/Carrerpage";
import Gallery from "./Gallery/Gallery";
import { Helmet } from "react-helmet";
import Blog from "./Component/Blog/Blog";
import BlogDetail from "./Component/Blog/BlogDetail";

<Helmet>
  <link rel="canonical" href="https://www.atlaknots.com" />
</Helmet>
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mobile" element={<FitnessApp />} />
            <Route path="mobile-onboarding" element={<MobileOnboarding />} />
            <Route path="branding" element={<FitnessApp />} />
            <Route path="fitness" element={<FitnessAppLanding />} />
            <Route path="technology" element={<Technology />} />
            <Route path="technews" element={<TechNews />} />
            <Route path="careers" element={<CareerPage />} />
            <Route path="/recentwork" element={<RecentWork/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/gallery" element={<Gallery/>}/>

            
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
