import { useId } from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width = 60,
  height = 60,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();
  const maskId = `${id}-mask`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/10 stroke-white/20 dark:fill-black/10 dark:stroke-black/20",
        className
      )}
      {...props}
    >
      <defs>
        {/* grid pattern */}
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>

        {/* mask for bottom fade */}
        <linearGradient id={maskId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="80%" stopColor="white" /> {/* visible */}
          <stop offset="100%" stopColor="black" /> {/* fade to transparent */}
        </linearGradient>
        <mask id={`${maskId}-mask`} maskUnits="objectBoundingBox">
          <rect width="100%" height="100%" fill={`url(#${maskId})`} />
        </mask>
      </defs>

      {/* apply mask */}
      <g mask={`url(#${maskId}-mask)`}>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        {squares && (
          <svg x={x} y={y} className="overflow-visible">
            {squares.map(([x, y]) => (
              <rect
                strokeWidth="0"
                key={`${x}-${y}`}
                width={width - 1}
                height={height - 1}
                x={x * width + 1}
                y={y * height + 1}
              />
            ))}
          </svg>
        )}
      </g>
    </svg>
  );
}
