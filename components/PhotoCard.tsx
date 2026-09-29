import Image from "next/image";
import PaperCard from "@/components/PaperCard";
import { stamp } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function PhotoCard({
  src,
  alt = "",
  caption,
  rotate,
  className,
  wrapperClassName,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  rotate?: string;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <PaperCard
      className={cn(
        "p-2 sm:p-3",
        caption ? "pb-11 sm:pb-12" : "pb-8 sm:pb-10",
        className,
      )}
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
            sizes="(min-width: 1280px) 240px, 45vw"
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
      {caption && (
        <p
          className={`${stamp.className} mt-2 px-1 text-center text-base leading-snug text-neutral-900 sm:mt-3 sm:text-lg`}
        >
          {caption}
        </p>
      )}
    </PaperCard>
  );
}
