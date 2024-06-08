import { playfair } from "@/app/utils/fonts";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript, SiPhp, SiSymfony } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";

// TODO: stagger chidlren imgs

const TechStackIcons = () => {
    return (
        <div className="flex items-center gap-3">
            <div className={`${playfair.className} md:text-xl`} >Main Tech Stack</div>
            
            <div className="flex justify-center gap-1 md:gap-3">
                <SiJavascript size={28} title="Javascript"/>
                <FaReact size={28} title="React"/>
                <TbBrandReactNative size={28} title="React Native"/>
                <SiPhp size={28} title="PHP"/>
                <SiSymfony size={28} title="Symfony"/>
                <SiTailwindcss size={28} title="Tailwind"/>
                <FaNodeJs size={28} title="Node.js"/>
                <SiNextdotjs size={28} title="Next.js"/>
                <SiMongodb size={28} title="MongoDB"/>
                <SiTypescript size={28} title="Typescript"/>

            </div>
        </div>
    );
  };
  
  export default TechStackIcons;