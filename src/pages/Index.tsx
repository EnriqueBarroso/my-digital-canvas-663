import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import SkillsSection from "@/components/ui/skills-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import BiopageBridge from "@/components/ui/biopage-bridge";
import Footer from "@/components/ui/footer";
import AnimatedBackground from "@/components/ui/animated-background";

const StackHubSection = lazy(() => import("@/components/ui/stack-hub-section"));

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <Suspense fallback={null}>
        <StackHubSection />
      </Suspense>
      <ProjectsSection />
      <ContactSection />
      <BiopageBridge />
      <Footer />
    </div>
  );
};

export default Index;
