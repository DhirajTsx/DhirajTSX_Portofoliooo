import { GridPattern } from "../magicui/grid-pattern"; 
import { cn } from "@/lib/utils";

function InterativeDemo() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <GridPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "-rotate-0"
        )}
        width={50}
        height={50}
        x={100}
        y={100}
        stroke="rgba(255,255,255,0.9)"  
        strokeWidth={1.5}               
      />
    </div>
  );
}

export default InterativeDemo;
