"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const handleMouseMove = (ev) => {
    if (!isHovering) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const navigateTo = (path) => {
    window.history.replaceState(null, "", window.location.pathname); // Hapus hash
    router.push(path);
  };

  return (
    <section className="mb-36">
      <div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="pattern-bg default-fade"
          style={{
            opacity: isHovering ? 0 : 0.3,
            transition: "opacity 0.5s ease-in-out",
          }}
        ></div>
        <div
          className="pattern-bg"
          style={{
            WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
            mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
            opacity: isHovering ? 0.3 : 0,
          }}
        ></div>
        <div className="opacity-10">
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary-700/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
        </div>
        <h1 className="rainbow text-5xl font-bold tracking-light text-primary-500">
          Hello, i&apos;m Kevin
          <br />
        </h1>
        <h1 className="text-5xl font-semibold">
          I&apos;m&nbsp;
          <Typewriter
            words={["Frontend Junior", "UI/UX Designer", "Backend Junior"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
        <p className="pt-5 text-gray-400">
          I&apos;m a frontend junior, and i still learning for Fullstack hehe
        </p>
        <div className="flex mt-10 gap-4">
          <button
            onClick={() => navigateTo("/about")}
            className="p-4 border border-primary-500 bg-gradient-to-r from-[#1148c9] to-[#00a7a7] rounded-md hover:bg-gradient-to-l hover:rounded-lg transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => navigateTo("/blogs")}
            className="p-4 border border-primary-500 border-collapse rounded-md hover:rounded-lg transition-all duration-300"
          >
            My Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
