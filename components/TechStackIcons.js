import { playfair } from "@/app/fonts";

// TODO: stagger chidlren imgs

const TechStackIcons = () => {
    return (
        <div className="flex items-center gap-3">
            <div className={`${playfair.className} md:text-2xl`} >Tech Stack |</div>
            
            <div className="flex justify-center gap-1 md:gap-3">
                <img alt="js-img" src="/assets/TechStack/js.png"/>
                <img alt="react-img" src="/assets/TechStack/react.png" />
                <img alt="tailwind-img" src="/assets/TechStack/tailwind.png"/>
                <img alt="nextjs-img" src="/assets/TechStack/nextjs.png" className="bg-white rounded-full"/>
                <img alt="nodejs-img" src="/assets/TechStack/nodejs.png"/>
            </div>
        </div>
    );
  };
  
  export default TechStackIcons;