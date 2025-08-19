import { SmoothCursor } from "@/components/magicui/smooth-cursor";

export function SmoothCursorDemo() {
  return (
    <>
      {/* Hidden on small and medium screens */}
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>
    </>
  );
}
