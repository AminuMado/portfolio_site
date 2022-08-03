import "./App.css";
import { useState } from "react";
import { getInitialTheme } from "./Utils";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";
import { Loader } from "./Components/Loader";
import { SkillsSection } from "./Components/SkillsSection";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";
import { ProjectsSection } from "./Components/ProjectsSection";
import { AboutSection } from "./Components/AboutSection";
import { Landing } from "./Components/Landing";

function App() {
  const [theme, setTheme] = useState(getInitialTheme());
  return (
    <>
      <Loader />
      <Landing />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <AboutSection />
      <SkillsSection theme={theme} />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
