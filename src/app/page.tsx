import { RetroGrid } from "@/components/magicui/RetroGrid";
import Hero from "@/components/sections/Homepage/Hometop";
export default function Home() {
  return (
    <main>
      <Hero />

      <div className=" h-screen flex items-center justify-center  bg-black dark:bg-white">
        <RetroGrid />
      </div>
       <div className=" h-screen flex items-center justify-center  bg-black dark:bg-white">
        {/* <RetroGrid /> */}
      </div>
    </main>
  );
}