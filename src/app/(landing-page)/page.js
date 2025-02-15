import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import HeroSection from "./components/HeroSection";
import Stack from "./components/Stack";
import Separator from "./components/Separator";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <Stack />
      <Separator />
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
