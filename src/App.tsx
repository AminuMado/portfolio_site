import "./App.css";
import { useState } from "react";
import { getInitialTheme } from "./Utils";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { AboutSection } from "./Components/AboutSection";
import { Landing } from "./Components/Landing";

function App() {
  const [theme, setTheme] = useState(getInitialTheme());
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Landing setIsLoading={setIsLoading} theme={theme} setTheme={setTheme} />
      {!isLoading && (
        <>
          <AboutSection />
          <SkillsSection theme={theme} />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
