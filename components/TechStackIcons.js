import { playfair } from "@/app/fonts";

// TODO: stagger chidlren imgs

const TechStackIcons = () => {
    return (
        <div className="flex items-center gap-3">
            <div className={`${playfair.className} md:text-2xl`} >Main Tech Stack |</div>
            
            <div className="flex justify-center gap-1 md:gap-3">
                <img alt="js-img" src="/assets/TechStack/js.webp" className="w-7 h-7"/>
                <img alt="react-img" src="/assets/TechStack/react.webp" className="w-7 h-7"/>
                <img alt="tailwind-img" src="/assets/TechStack/tailwind.webp" className="w-7 h-7"/>
                <img alt="nextjs-img" src="/assets/TechStack/nextjs.webp" className="w-7 h-7"/>
                <img alt="nodejs-img" src="/assets/TechStack/nodejs.webp" className="w-7 h-7"/>
                <img alt="mongodb-img" src="/assets/TechStack/mongodb.webp" className="w-7 h-7"/>
                <img alt="typescript-img" src="/assets/TechStack/typescript.webp" className="w-7 h-7"/>

            </div>
        </div>
    );
  };
  
  export default TechStackIcons;