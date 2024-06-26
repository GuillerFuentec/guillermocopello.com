// Hooks
import { useState, useEffect } from "react";
//  CSS
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Components
import Layout from "./assets/Layout";
import Hero from "./assets/components/Hero";
import Blogging from "./assets/components/BodyBlogging";
import Works from "./assets/components/BodyWorks";
import HeaderNav from "./assets/components/HeaderNav";
import Footer from "./assets/components/Footer";
// Routes
import AboutMe from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacity from "./pages/Privacity-Security/Privacity";
import Security from "./pages/Privacity-Security/Security";
// Router lib
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dracula"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

export default function App() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "light" : "dracula");
  };

  return (
    <div data-theme={theme}>
      <Layout>
        <HeaderNav toggleTheme={toggleTheme} />
        <Router>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/privacity" element={<Privacity />} />
            <Route path="/security" element={<Security />} />
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Works />
                  <Blogging />
                </>
              }
            />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
        <Footer />
      </Layout>
    </div>
  );
}
