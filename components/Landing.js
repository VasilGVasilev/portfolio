import SocialMediaIcons from "./SocialMediaIcons";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import { playfair } from "@/app/fonts";
import TechStackIcons from "./TechStackIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* basis and order are set like that bacause on mobile we first see img then text, if on desktop -> img is ordered 2 and proportion img <-> text is 3/5 <-> 2/5 */}
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
          // before:w-full before:max-w-[400px] md:before:max-w-[600px], biggest width but not more than 400px, 600px
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              // filter is not actually necessary, you can go ahead with saturate-200 directly
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
              src="/assets/profile-image.webp"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
            src="/assets/profile-image.webp"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className={`text-6xl ${playfair.className} z-10 text-center md:text-start`} >
            {/* {""} gives us space between Jane and Esper (due to Esper being within a span) */}
            Vasil {""}
            {/* before+content to attach the image brush to the text */}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[15px] before:-top-[10px] before:z-[-1]"
            >
              Vasilev
            </span>
          </p>

          <p className="mt-20 mb-7 text-center md:text-start">
            Hey, I am Vasil Vasilev. A passionate Web Developer based in Sofia, Bulgaria. 📍 
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // slight delay 
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-300"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </Link>
          <Link
          // padding and bg create the illusion of a border
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="./VasilVasilevCV.pdf"
            download="CV-Document"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`${playfair.className} bg-deep-blue hover:text-red transition duration-300 w-full h-full flex items-center justify-center px-10`}>
              My CV
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // slight delay 
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // slight delay 
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TechStackIcons />
        </motion.div>

      </div>
      
    </section>
  );
};

export default Landing;

