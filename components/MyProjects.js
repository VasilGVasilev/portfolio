import LineGradient from "./LineGradient";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { playfair } from "@/app/fonts";
import Link from "next/link";

const MyProjects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="projects" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">

        {/* HEADER */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className={`${playfair.className} font-semibold text-4xl mb-5`}>
            <span className="text-red">PRO</span>JECTS
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            My most recent three projects...
          </p>
        </motion.div>

        {/* IMAGE */}
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">

        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute">
              <p className={`${playfair.className}  font-semibold text-5xl`}>01</p>
              <p className={`${playfair.className}  font-semibold text-3xl mt-3`}>
                Ixora Residence
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[1]" />
          </div>
          <p className="mt-5">
              A SSG website for a freelance project developed via Next.js, Tailwind, React.
               The main feature is change of color signifying the apartment status - sold, available, reserved.
          </p>
          <div className="w-[100%] h-[100%] mt-5 overflow-hidden mx-auto ">
            {/* The CSS OVERFLOW property controls what happens to content that is too big to fit into an area. */}
            <Link href={"https://ixorabg.com/"} >
              <img src="assets/project-one.webp" alt="ixroa-img" className=" transition-transform duration-500 ease-in-out hover:scale-125" />
            </Link>
          </div>
          
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute">
              <p className={`${playfair.className}  font-semibold text-5xl`}>02</p>
              <p className={`${playfair.className}  font-semibold text-3xl mt-3`}>
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[1]" />
          </div>
          <p className="mt-5">
              Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
              amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
              nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
              faucibus a
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute">
              <p className={`${playfair.className} font-semibold text-5xl`}>03</p>
              <p className={`${playfair.className} font-semibold text-3xl mt-3`}>
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[1]" />
          </div>
          <p className="mt-5">
              Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
              curabitur. Lectus libero, egestas enim aliquam quis felis amet.
              Sagittis, amet netus fringilla netus lobortis odio sed platea.
              Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;