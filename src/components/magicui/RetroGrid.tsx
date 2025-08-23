import { cn } from "@/lib/utils";

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  angle?: number; // grid tilt angle
  cellSize?: number; // grid cell size
  opacity?: number; // grid opacity
  lightLineColor?: string; // grid line color light mode
  darkLineColor?: string; // grid line color dark mode
  perspective?: number; // custom perspective
  gridHeight?: string | number; // grid height
  gridWidth?: string | number; // grid width
  showGradientOverlay?: boolean; // toggle gradient
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.1,
  lightLineColor = "gray",
  darkLineColor = "red",
  perspective = 400,
  gridHeight = "500vh",
  gridWidth = "600vw",
  showGradientOverlay = true,
  ...props
}: RetroGridProps) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
    "--grid-height": typeof gridHeight === "number" ? `${gridHeight}px` : gridHeight,
    "--grid-width": typeof gridWidth === "number" ? `${gridWidth}px` : gridWidth,
    "--perspective": `${perspective}px`,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden",
        "opacity-[var(--opacity)]",
        `[perspective:var(--perspective)]`,
        className
      )}
      style={gridStyles}
      {...props}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)]",
            "[background-repeat:repeat]",
            "[background-size:var(--cell-size)_var(--cell-size)]",
            "[inset:0%_0px]",
            "[margin-left:-200%]",
            "[transform-origin:100%_0_0]",
            "dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]"
          )}
          style={{
            height: "var(--grid-height)",
            width: "var(--grid-width)",
          }}
        />
      </div>
      {showGradientOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
      )}
    </div>
  );
}
