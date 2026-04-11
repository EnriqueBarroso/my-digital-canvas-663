import Navigation from "@/components/ui/navigation";
import AboutSection from "@/components/ui/about-section";
import AnimatedBackground from "@/components/ui/animated-background";

const About = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-24">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
