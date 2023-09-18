import LineGradient from "./LineGradient";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { playfair } from "@/app/utils/fonts";
import Link from "next/link";



const Project = ({ number, color, projectBorder, pictureLinkBorder, url, altLink, srcImg, projectName, projectDesc, githubLink }) => {
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
        <Link href={url}>
          <p className={`${playfair.className} font-semibold text-5xl hover:scale-125 transition`}>0{number}</p>
          <p className={`${playfair.className} font-semibold text-3xl mt-3 hover:scale-125 transition`}>
            {projectName}
          </p>
        </Link>
        </div>
        <div className={`w-full h-36 bg-${color} absolute right-5 top-0 z-[1]`} />
      </div>
      <p className="mt-10 pr-5 text-justify text-neutral-300">
          {projectDesc}
      </p>
      <br />
      <Link href={githubLink} className="text-neutral-400 hover:text-white">See Github Code</Link>
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
          <p className="mt-10 mb-7 text-neutral-300">
            My most recent three projects...
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div 
          className="mt-16 md:mt-0"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
              hidden: { opacity: 0, translateY: 20, skewX: -80, rotateY: 50 },
              visible: { opacity: 1, translateY: 0, skewX: 0, rotateY: 0 },
          }}  
        >
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="coding-image"
                className="z-10 max-w-[700px] max-h-[400px]"
                src="assets/coding-image.webp"
              />
            </div>
          ) : (
            <img alt="coding-image" className="z-10 max-w-[500px] max-h-[400px]" src="assets/coding-image.webp" />
          )}
        </motion.div>
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
          altLink="ixora-img" 
          srcImg="assets/project-one.webp" 
          projectName={'Ixora Residence'} 
          projectDesc={'A SSG website for a freelance project about sell of apartments developed via Next.js, Tailwind, React and Framer Motion. '} 
          githubLink={'https://github.com/VasilGVasilev/nextJS/tree/ixoraInter'}
        />

        {/* CHAT */}
        <Project 
          number='2' 
          color="red"
          projectBorder="before:border-red"
          pictureLinkBorder="border-red"  
          url="http://vgvchat.tech/" 
          altLink="chat-img" 
          srcImg="assets/project-two.webp" 
          projectName={'VGV Chat'} 
          projectDesc={'A Create React App website for real-time messaging developed via SASS, React and Firebase with unit testing via Cypress.'} 
          githubLink={'https://github.com/VasilGVasilev/simpleChat'}
        />

        {/* AIRBNB */}
        <Project 
          number='3' 
          color="yellow"
          projectBorder="before:border-yellow"
          pictureLinkBorder="border-yellow"  
          url="https://vgv-rental.vercel.app/" 
          altLink="airbnb-img" 
          srcImg="assets/project-three.webp" 
          projectName={'Airbnb clone'} 
          projectDesc={'A fullstack application developed via Typescript, Next.js, React, Tailwind, Prisma, MongoDB, Zustand, Next-Auth, brypt, axios.'} 
          githubLink={'https://github.com/VasilGVasilev/airbnb'}
      
        />

      </div>

    </section>
  );
};

export default MyProjects;
