import LineGradient from "./LineGradient";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { playfair } from "@/app/fonts";
import Link from "next/link";



const Project = ({ number, color, projectBorder, pictureLinkBorder, url, altLink, srcImg, projectName, projectDesc }) => {
  const overlayStyles = `md:w-1/3 mt-10 relative z-0 p-10 xl:ml-20 xl:p-16 before:absolute before:bottom-10 before:right-10
  before:w-full before:h-full before:border-4 ${projectBorder} before:z-[-1]`;
  const borderColor = `w-full h-fit border-t-4 border-r-4 ${pictureLinkBorder} m-5 overflow-hidden mx-auto`
  return (
      <motion.div
      className={overlayStyles}
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
        <Link href={url} >
          <p className={`${playfair.className} font-semibold text-5xl`}>0{number}</p>
          <p className={`${playfair.className} font-semibold text-3xl mt-3`}>
            {projectName}
          </p>
        </Link>
        </div>
        <div className={`w-1/2 md:w-3/4 h-32 bg-${color} absolute right-0 top-0 z-[1]`} />
      </div>
      <p className="mt-5 pr-5 text-justify">
          {projectDesc}
      </p>
      <div className={borderColor}>
        {/* The CSS OVERFLOW property controls what happens to content that is too big to fit into an area. */}
        <Link href={url} >
          <img src={srcImg} alt={altLink} className="transition-transform duration-700 ease-in-out hover:scale-150" />
        </Link>
      </div>
    </motion.div>
  );
};

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
                src="assets/skills-image.webp"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.webp" />
          )}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="md:flex md:justify-between mt-16 gap-16">


        {/* IXORA */}
        <Project
          number='1' 
          color="blue"
          projectBorder="before:border-blue"
          pictureLinkBorder="border-blue" 
          url="https://ixorabg.com/" 
          altLink="ixroa-img" 
          srcImg="assets/project-one.webp" 
          projectName={'Ixora Residence'} 
          projectDesc={'A SSG website for a freelance project developed via Next.js, Tailwind, React. The main feature is change of color signifying the apartment status - sold, available, reserved.'} 
        />

        {/* CHAT */}
        <Project 
          number='2' 
          color="red"
          projectBorder="before:border-red"
          pictureLinkBorder="border-red"  
          url="http://vgvchat.tech/" 
          altLink="ixroa-img" 
          srcImg="assets/project-two.webp" 
          projectName={'VGV Chat'} 
          projectDesc={'A SSG website developed via Firebase, SASS, React. Once logged-in, users can search for all other users in DB and choose to chat with them by selecting their name. The chat between current user and searched user is updated in real time. A feature sets the last message of a user to color red if they are not selected - the effect of unread messages.'} 
        />

        {/* OTHER */}
        <Project 
          number='3' 
          color="yellow"
          projectBorder="before:border-yellow"
          pictureLinkBorder="border-yellow"  
          url="https://ixorabg.com/" 
          altLink="ixroa-img" 
          srcImg="assets/project-one.webp" 
          projectName={'Ixora Residence'} 
          projectDesc={'A SSG website for a freelance project developed via Next.js, Tailwind, React. The main feature is change of color signifying the apartment status - sold, available, reserved.'} 
        />

      </div>

    </section>
  );
};

export default MyProjects;