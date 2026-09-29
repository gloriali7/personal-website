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

// To add a project, add an entry here. `href` is optional.
const projects: { title: string; description: string; href?: string }[] = [];

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
        <PaperCard
          className="w-full max-w-2xl px-6 pt-16 pb-20 sm:px-16"
          rotate="-rotate-1"
        >
          <p
            className={`${stamp.className} text-center text-2xl tracking-wide text-neutral-600 sm:text-3xl`}
          >
            projects
          </p>
          {projects.length === 0 ? (
            <p
              className={`${stamp.className} mt-8 text-center text-lg text-neutral-900 sm:text-xl`}
            >
              coming soon...
            </p>
          ) : (
            <ul className="mt-10 flex flex-col gap-6">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="border-b border-dashed border-neutral-400 pb-5"
                >
                  <h2
                    className={`${stamp.className} text-xl text-neutral-900 sm:text-2xl`}
                  >
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p
                    className={`${stamp.className} mt-2 text-base leading-relaxed text-neutral-700 sm:text-lg`}
                  >
                    {project.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </PaperCard>
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
