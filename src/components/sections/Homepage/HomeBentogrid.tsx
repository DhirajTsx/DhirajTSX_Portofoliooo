"use client";
import InteractiveDemo from "@/components/ui/interactiveGridDemo";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import linearDemo from "@/assets/images/MeColor.png";
import { SkillsMarquee } from "./gridMarque";
import { GridPattern } from "@/components/magicui/grid-pattern";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GlassCopyBtn } from "@/components/magicui/CopyButton";
import { ScrollBasedVelocityDemo } from "./MotionTextGrid";
import { motion } from "framer-motion";
import Earth from "@/components/ui/globe";
import { FlipText } from "@/components/magicui/FlipText";
function HomeBentogrid() {
  const socialData = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/your-profile",
      icon: LinkedInIcon,
    },
    {
      id: 2,
      href: "https://github.com/your-profile",
      icon: GitHubIcon,
    },
    {
      id: 3,
      href: "https://www.instagram.com/your-profile",
      icon: InstagramIcon,
    },
  ];
  return (
    <div className="relative z-[40] w-full font-[var(--font-outfit)] min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black dark:bg-white transition-colors duration-300">
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3 max-w-7xl mx-auto w-full px-5 py-22">
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-4 bg-neutral-900 min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 top-14">
            <ScrollBasedVelocityDemo />
          </div>

          <div className="absolute bottom-6 left-0 w-full px-4 md:px-8 z-50">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 text-center md:text-left max-w-full md:max-w-md leading-relaxed"
            >
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </motion.p>
          </div>
          <div className="absolute bottom-0 w-full flex justify-end md:justify-end xl:justify-end 0 sm:justify-end ml-16  z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative w-[85%] sm:w-[50%] md:w-[75%] lg:w-[55%] xl:w-[45%]"
            >
              <Image
                src={linearDemo}
                alt="linear demo image"
                width={800}
                height={800}
                className="object-cover rounded-2xl z-10 w-full h-auto select-none pointer-events-none "
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background opacity-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background opacity-20" />
        </WobbleCard>
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-2 min-h-[400px]">
           
          
          <div className="absolute left-[-23px] top-35 sm:right-[20px] sm:left-[10px] md:left-[-100px] lg:left-[-60px] xl:left-[-23px] z-10">
              
          <Earth 
           className=" w-[450px]" />
          </div>
           <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background opacity-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background opacity-20" />
        </WobbleCard>
        <div className="md:col-span-2">
          <div className="grid grid-cols-3 gap-2 h-full">
            {socialData.map(({ id, href, icon: Icon }) => (
              <WobbleCard
                key={id}
                containerClassName="h-30 rounded-2xl shadow-2xl shadow-black relative"
              >
                <Link
                  href={href}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <Icon
                    sx={{
                      fontSize: 60,
                      color: "white",
                    }}
                    className="
        transition-all duration-700 ease-in-out
        drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
        group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
      "
                  />
                </Link>
              </WobbleCard>
            ))}
            <WobbleCard containerClassName="h-30 rounded-2xl shadow-2xl bg-pink-700 shadow-black col-span-3 relative">
              <InteractiveDemo />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-14 text-center space-y-2">
                <p className="text-sm text-white  font-[600] text-shadow ">
                  Click below to copy my email instantly ✨
                </p>
                <GlassCopyBtn command="Dhirajbhavsar.offcial@gmail.com" />
              </div>
            </WobbleCard>
          </div>
        </div>
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-2 min-h-[250px]">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white">
              Developer Friendly
            </h2>
            <p className="mt-2 text-base text-neutral-200">
              Built with APIs, SDKs, and docs devs love.
            </p>
          </div>
        </WobbleCard>

        {/* Driven by curiosity */}
        <WobbleCard containerClassName="relative shadow-2xl bg-pink-800 shadow-black md:col-span-2 min-h-[250px]">
          <GridPattern />
          <div className="flex justify-center relative bottom-13 items-center px-4">
            <h2 className="font-[800] text-white text-xl text-center text-shadow max-w-xl line-clamp-2">
              Driven by curiosity, powered by Technology
            </h2>
          </div>

          {/* Background animations */}
          <div className="absolute inset-0 z-0">
            <SkillsMarquee />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background opacity-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background opacity-20" />
          </div>
        </WobbleCard>

        {/* Bottom Full Width */}
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-6 min-h-[350px] bg-neutral-900">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 text-base text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src={linearDemo}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[25%] -bottom-6 object-contain rounded-2xl opacity-90"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

export default HomeBentogrid;
