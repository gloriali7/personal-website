import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Torn bottom edge: [x%, depth% from bottom]. Depth is capped in px so tall
// cards (e.g. on narrow phones) don't lose their last lines of text.
const tear: [number, number][] = [
  [100, 8], [95, 3], [89, 9], [83, 3], [77, 10], [71, 4], [65, 11], [59, 5],
  [53, 12], [47, 6], [41, 13], [35, 4], [29, 11], [23, 5], [17, 12], [11, 7],
  [5, 13], [0, 6],
];

const clipPath = `polygon(0% 0%, 100% 0%, ${tear
  .map(([x, d]) => `${x}% calc(100% - min(${d}%, ${d * 3}px))`)
  .join(", ")})`;

export default function PaperCard({
  children,
  className,
  rotate = "-rotate-2",
  wrapperClassName,
  smallTape = false,
}: {
  children: ReactNode;
  className?: string;
  rotate?: string;
  wrapperClassName?: string;
  smallTape?: boolean;
}) {
  const tapeSize = smallTape
    ? "-top-2 h-4 w-10 sm:-top-3 sm:h-7 sm:w-20"
    : "-top-3 h-7 w-20";
  return (
    <div className={cn("relative", rotate, wrapperClassName)}>
      <div
        className={cn(
          "absolute z-10 -rotate-[20deg] bg-neutral-100/60 shadow-sm",
          tapeSize,
          smallTape ? "-left-3 sm:-left-6" : "-left-6"
        )}
      />
      <div
        className={cn(
          "absolute z-10 rotate-[18deg] bg-neutral-100/60 shadow-sm",
          tapeSize,
          smallTape ? "-right-3 sm:-right-6" : "-right-6"
        )}
      />
      <div
        className={cn(
          "bg-[#ece5d8] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]",
          className
        )}
        style={{ clipPath }}
      >
        {children}
      </div>
    </div>
  );
}
