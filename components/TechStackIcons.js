import { playfair } from "@/app/fonts";

// TODO: stagger chidlren imgs

const TechStackIcons = () => {
    return (
        <div className="flex items-center gap-3">
            <div className={`${playfair.className} md:text-2xl`} >Tech Stack |</div>
            
            <div className="flex justify-center gap-1 md:gap-3">
                <img alt="js-img" src="/assets/TechStack/js.png" className="w-7 h-7"/>
                <img alt="react-img" src="/assets/TechStack/react.png" className="w-7 h-7"/>
                <img alt="tailwind-img" src="/assets/TechStack/tailwind.png" className="w-7 h-7"/>
                <img alt="nextjs-img" src="/assets/TechStack/nextjs.webp" className="w-7 h-7"/>
                <img alt="nodejs-img" src="/assets/TechStack/nodejs.png" className="w-7 h-7"/>
                <img alt="mongodb-img" src="/assets/TechStack/mongodb.png" className="w-7 h-7"/>
                <img alt="typescript-img" src="/assets/TechStack/typescript.png" className="w-7 h-7"/>

            </div>
        </div>
    );
  };
  
  export default TechStackIcons;