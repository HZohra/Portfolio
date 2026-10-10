import Hero from "@/components/hero/hero";
import AboutSection from "@/components/about/about-section";
import FeaturedProjectsSection from "@/components/projects/featured-projects-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}