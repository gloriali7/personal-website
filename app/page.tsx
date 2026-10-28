import Image from "next/image";
import ContactCard from "@/components/ContactCard";
import PaperCard from "@/components/PaperCard";
import PhotoCard from "@/components/PhotoCard";
import { stamp } from "@/lib/fonts";


const aboutPhotos: {
    src?: string;
    alt?: string;
    caption?: string;
    rotate: string;
    placement: string;
  }[] = [
    // left side, top
    {
      src: "/benji.jpeg",
      alt: "dog swimming in lake",
      caption: "My dog Benji going for a swim on the North Shore.",
      rotate: "-rotate-3",
      placement: "xl:col-start-1 xl:row-start-1",
    },
    // left side, bottom
    {
      src: "/friend.jpeg",
      alt: "two friends",
      caption: "My friend Grace and I at UBC Homecoming.",
      rotate: "rotate-2",
      placement: "xl:col-start-1 xl:row-start-2",
    },
    // right side, top
    {
      src: "/bmth.jpeg",
      alt: "a man singing",
      caption: "I saw my favourite metalcore band, Bring Me the Horizon!",
      rotate: "rotate-3",
      placement: "xl:col-start-3 xl:row-start-1",
    },
    // right side, bottom
    {
      src: "/ptv.jpeg",
      alt: "band playing",
      caption: "I've also seen my favourite post-hardcore band, Pierce the Veil!",
      rotate: "-rotate-2",
      placement: "xl:col-start-3 xl:row-start-2",
    },
  ];

// Each project gets its own torn, taped sheet. `href` is optional — sheets
// without one aren't clickable. `image` is an optional screenshot in /public.
const projects: {
  title: string;
  description: string;
  href?: string;
  image?: { src: string; alt: string };
  rotate: string;
}[] = [
  {
    title: "My Cookbook",
    description:
      "Hungry for inspiration? Build your own cookbook of recipes you love, then browse other people's cookbooks to discover what everyone else is cooking.",
    href: "https://main.d3i9kbu0ze4jkf.amplifyapp.com",
    rotate: "-rotate-2",
  },
  {
    title: "Mystery Hunters",
    description:
      "Feeling like chasing down a mystery? Step into an 8-bit, choose-your-path detective game built in Java Swing. Solve cases, collect clues, and play it right in your browser with CheerpJ.",
    href: "https://mystery-hunters.dnja5kcpvlfil.amplifyapp.com/",
    image: {
      src: "/mystery-hunters.png",
      alt: "Mystery Hunters main menu screen",
    },
    rotate: "rotate-2",
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
        <div className="grid w-full max-w-2xl grid-cols-2 items-center gap-x-5 gap-y-12 xl:max-w-none xl:w-auto xl:grid-cols-[15rem_minmax(0,40rem)_15rem] xl:grid-rows-2 xl:gap-x-14">
          <PaperCard
            className="w-full px-8 py-16 sm:px-16"
            rotate="rotate-1"
            wrapperClassName="col-span-2 xl:col-span-1 xl:col-start-2 xl:row-span-2 xl:row-start-1"
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
              caption={photo.caption}
              rotate={photo.rotate}
              wrapperClassName={photo.placement}
            />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center justify-center bg-background p-8"
      >
        <div className="flex w-full max-w-2xl flex-col items-center gap-12">
          <PaperCard className="w-full px-6 pt-12 pb-14 sm:px-16" rotate="-rotate-1">
            <p
              className={`${stamp.className} text-center text-2xl tracking-wide text-neutral-600 sm:text-3xl`}
            >
              projects
            </p>
          </PaperCard>
          {projects.map((project) => {
            const content = (
              <>
                {project.image && (
                  <div className="relative mb-8 aspect-[1284/838] w-full -rotate-1 overflow-hidden border-4 border-white bg-neutral-300/50 shadow-md">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 672px) 560px, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <h2
                  className={`${stamp.className} text-2xl text-neutral-900 group-hover:underline sm:text-3xl`}
                >
                  {project.title}
                </h2>
                <p
                  className={`${stamp.className} mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg`}
                >
                  {project.description}
                </p>
                {project.href && (
                  <p
                    className={`${stamp.className} mt-4 text-sm uppercase tracking-widest text-neutral-500`}
                  >
                    visit site &rarr;
                  </p>
                )}
              </>
            );
            return (
              <PaperCard
                key={project.title}
                className="px-6 pt-12 pb-16 sm:px-14"
                rotate={project.rotate}
                wrapperClassName={
                  project.href
                    ? "w-full transition-transform hover:-translate-y-1"
                    : "w-full"
                }
              >
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </PaperCard>
            );
          })}
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[calc(100vh-65px)] scroll-mt-16 items-center justify-center bg-background px-5 py-8 sm:p-8"
      >
        <ContactCard />
      </section>
    </>
  );
}
