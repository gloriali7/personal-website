import Image from "next/image";
import PaperCard from "@/components/PaperCard";
import { stamp } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function PhotoCard({
  src,
  alt = "",
  rotate,
  className,
  wrapperClassName,
}: {
  src?: string;
  alt?: string;
  rotate?: string;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <PaperCard
      className={cn("p-2 pb-8 sm:p-3 sm:pb-10", className)}
      rotate={rotate}
      wrapperClassName={wrapperClassName}
      smallTape
    >
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-300/50">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 220px, 45vw"
            className="object-cover"
          />
        ) : (
          <div
            className={`${stamp.className} flex h-full items-center justify-center border-2 border-dashed border-neutral-400 text-neutral-500`}
          >
            photo
          </div>
        )}
      </div>
    </PaperCard>
  );
}
