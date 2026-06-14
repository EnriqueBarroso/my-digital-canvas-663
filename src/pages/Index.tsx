import { lazy, Suspense } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import SkillsSection from "@/components/ui/skills-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";
import AnimatedBackground from "@/components/ui/animated-background";

const StackHubSection = lazy(() => import("@/components/ui/stack-hub-section"));

const Index = () => {
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
      <Footer />
    </div>
  );
};

export default Index;
