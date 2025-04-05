import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import HeroSection from "./components/HeroSection";
import Stack from "./components/Stack";
import Separator from "./components/ui/Separator";
import Wave from "./components/ui/Wave";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <Wave />
      <Stack />
      <Separator />
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
