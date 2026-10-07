import Hero from "@/components/hero/hero";
import AboutSection from "@/components/about/about-section";
import SkillsSection from "@/components/skills/skills-section";
import CredentialsSection from "@/components/credentials/credentials-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <CredentialsSection />
      <Footer />
    </main>
  );
}