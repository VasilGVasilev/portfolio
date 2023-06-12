import { playfair } from "@/app/fonts";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

// the following two are merely templates for the two states /variants/
// staggering one by one pics of projects effect
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// smooth landing with parachute effect
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-700
    bg-grey z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className={`${playfair.className} text-2xl`}>{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`/assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className={`${playfair.className} font-semibold text-4xl`}>
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className={`${playfair.className} flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-semibold`}
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subtitle='Project 1 substitle' />
          <Project title="Project 2" subtitle='Project 1 substitle' />

          {/* ROW 2 */}
          <Project title="Project 3" subtitle='Project 1 substitle' />
          <Project title="Project 4" subtitle='Project 1 substitle' />
          <Project title="Project 5" subtitle='Project 1 substitle' />

          {/* ROW 3 */}
          <Project title="Project 6" subtitle='Project 1 substitle' />
          <Project title="Project 7" subtitle='Project 1 substitle' />
          <div
            className={`${playfair.className} flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-semibold`}
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;