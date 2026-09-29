import PaperCard from "@/components/PaperCard";
import PhotoCard from "@/components/PhotoCard";
import { stamp } from "@/lib/fonts";

// To add a picture, put the image in /public and set `src`, e.g. "/dog.jpg".
const aboutPhotos: {
  src?: string;
  alt?: string;
  rotate: string;
  placement: string;
}[] = [
  { rotate: "-rotate-3", placement: "xl:col-start-1 xl:row-start-1" },
  { rotate: "rotate-2", placement: "xl:col-start-1 xl:row-start-2" },
  {
    rotate: "rotate-3",
    placement: "xl:col-start-3 xl:row-start-1 xl:row-span-2",
  },
];

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center justify-center bg-background p-8"
      >
        <PaperCard className="w-full max-w-3xl px-6 pt-16 pb-14 sm:px-16 sm:pt-20 sm:pb-16">
          <p
            className={`${stamp.className} text-center text-2xl tracking-wide text-neutral-600 sm:text-3xl`}
          >
            hello my name is...
          </p>
          <h1
            className={`${stamp.className} mt-4 text-center text-6xl tracking-tight text-neutral-900 sm:text-8xl md:text-9xl`}
          >
            Gloria Li
          </h1>
        </PaperCard>
      </section>

      <section
        id="about"
        className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center justify-center bg-background p-8"
      >
        <div className="grid w-full max-w-2xl grid-cols-3 items-center gap-x-5 gap-y-12 xl:max-w-none xl:w-auto xl:grid-cols-[13rem_minmax(0,40rem)_13rem] xl:grid-rows-2 xl:gap-x-14">
          <PaperCard
            className="w-full px-8 py-16 sm:px-16"
            rotate="rotate-1"
            wrapperClassName="col-span-3 xl:col-span-1 xl:col-start-2 xl:row-span-2 xl:row-start-1"
          >
            <p
              className={`${stamp.className} text-center text-2xl tracking-wide text-neutral-600 sm:text-3xl`}
            >
              about me
            </p>
            <p
              className={`${stamp.className} mt-6 text-lg leading-relaxed text-neutral-900 sm:text-xl`}
            >
              Hello! I am currently a student at the University of British
              Columbia studying Business and Computer Science. I am interested
              in how technology is used in business, as well as the process of
              creating video games. In my free time, I enjoy going on
              adventures with my Golden Retriever, exploring fashion,
              experimenting with new baking recipes, and listening to genres
              such as metalcore and post-hardcore.
            </p>
          </PaperCard>
          {aboutPhotos.map((photo, i) => (
            <PhotoCard
              key={i}
              src={photo.src}
              alt={photo.alt}
              rotate={photo.rotate}
              wrapperClassName={photo.placement}
            />
          ))}
        </div>
      </section>
    </>
  );
}
