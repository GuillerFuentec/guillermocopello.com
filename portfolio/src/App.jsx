import { useState } from "react";
import "./App.css";
import Layout from "./assets/Layout";
import Hero from "./assets/components/Hero";
import Blogging from "./assets/components/BodyBlogging";
import Works from "./assets/components/BodyWorks";
import HeaderNav from "./assets/components/HeaderNav";
import "bootstrap-icons/font/bootstrap-icons.css";
import NewsLetter from "./assets/components/NewsLetter";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "light" : "dracula");
  };

  return (
    <div data-theme={theme}>
      <Layout>
        <HeaderNav toggleTheme={toggleTheme}/>
        <Hero />
        <Blogging/>
        <Works/>
      </Layout>
    </div>
  );
}
