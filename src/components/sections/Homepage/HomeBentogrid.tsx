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
// import { FlipText } from "@/components/magicui/FlipText";
import ProgressiveBlur from "@/components/magicui/ProgressiveBlur";
// import GlassButton from "@/components/customUi/GlassButton";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ConnectButton from "@/components/customUi/GlassButton";
import { ShinyButton } from "@/components/magicui/shiny-button";
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
    <div className="relative  z-[40] w-full font-[var(--font-outfit)] min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black dark:bg-[#FFFFFF] transition-colors duration-300">
      <ProgressiveBlur position="top" />
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3 max-w-7xl mx-auto w-full px-5 py-22">
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-4 bg-neutral-900 min-h-[400px] overflow-hidden group">
          <motion.div
            className="absolute inset-0 top-14"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollBasedVelocityDemo />
          </motion.div>

          <div className="absolute bottom-10 left-0 w-full px-4 md:px-8 z-50 flex flex-col items-start gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm md:text-base text-white/80 max-w-md"
            >
              Hi, I’m <span className=" bg-indigo-800 text-white">Dhiraj Bhawsar</span> — a passionate <span className=" bg-pink-800">MERN Stack Developer</span> who
              loves building modern web apps with clean UI and smooth user
              experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex items-center"
            >
              <ShinyButton
                text="Click here to explore me"
                href="/about"
                className="font-semibold border-b-1 border-slate-200/10 cursor-pointer text-sm text-white/70 hover:text-white/60"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-0 w-full flex justify-end md:justify-end xl:justify-end sm:justify-end ml-16 z-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-[85%] sm:w-[50%] md:w-[75%] lg:w-[55%] xl:w-[45%]"
            >
              <Image
                src={linearDemo}
                alt="linear demo image"
                width={800}
                height={800}
                className="object-cover rounded-2xl z-10 w-full h-auto select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
          <div className="pointer-events-none absolute z-40 bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-500 ease-in-out" />
        </WobbleCard>

        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-2 min-h-[400px] group">
          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 12,
              mass: 0.5,
            }}
          >
            <div className="flex flex-col absolute top-14 justify-center gap-5 items-center p-1.5">
              <motion.span
                className="pointer-events-none z-10 h-full md:text-[22px] sm:text-[20px] lg:text-[17px] xl:text-[22px] 2xl:text-[20px] whitespace-pre-wrap text-white/90 text-shadow bg-clip-text text-center text-[22px] font-bold leading-none tracking-tighter"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Available to work across US, USA & India time zones
              </motion.span>
            </div>
          </motion.div>

          <div className="absolute left-[-28px] top-35 sm:right-[20px] sm:left-[10px] md:left-[-100px] lg:left-[-60px] xl:left-[-23px] z-10">
            <Earth className=" w-[450px] " />
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
           <div className="pointer-events-none absolute z-40 bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-500 ease-in-out" />
        </WobbleCard>

        <div className="md:col-span-2">
          <div className="grid grid-cols-3 gap-2 h-full items-center justify-center">
            {socialData.map(({ id, href, icon: Icon }) => (
              <WobbleCard
                key={id}
                containerClassName="h-30 rounded-2xl  shadow-2xl shadow-black relative group" // group add kiya
              >
                <Link
                  href={href}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Icon
                    sx={{
                      fontSize: 60,
                      color: "white",
                    }}
                    className=" transition-all  duration-700 ease-in-out drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]  group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
      "
                  />
                </Link>
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none" />
              </WobbleCard>
            ))}
            <WobbleCard containerClassName="h-30 rounded-2xl shadow-2xl bg-black shadow-black col-span-3 relative group">
              <InteractiveDemo />

              <div className="absolute  inset-0 flex flex-col items-center justify-center px-14 text-center space-y-2">
                <p className="text-sm text-white font-[600] text-shadow ">
                  Click below to copy my email instantly ✨
                </p>
                <GlassCopyBtn command="Dhirajbhavsar.offcial@gmail.com" />
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
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

        <WobbleCard containerClassName="relative shadow-2xl bg-black shadow-black md:col-span-2 min-h-[250px]">
          <GridPattern />
          <div className="flex justify-center relative bottom-13 items-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: -0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none z-10 h-full md:text-[22px] sm:text-[20px] lg:text-[17px] xl:text-[22px] 2xl:text-[20px] whitespace-pre-wrap text-white text-shadow bg-clip-text text-center text-[20px] font-bold leading-none tracking-tighter"
            >
              Driven by curiosity, powered by Technology
            </motion.h2>
          </div>
          <div className="absolute inset-0 z-0">
            <SkillsMarquee />
          </div>
        </WobbleCard>
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
