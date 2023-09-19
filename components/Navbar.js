import { useState } from "react";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { opensans, playfair } from "@/app/utils/fonts";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image
const LinkTemplate = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-[#facc15]" : ""
      }  hover:scale-125 transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href={'#home'} ><h4 className={`${playfair.className} text-3xl font-bold`}>Vasil Vasilev</h4></AnchorLink> 

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className={`${opensans.className} flex justify-between gap-16 text-base font-semibold`}>
            <LinkTemplate
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Articles"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Qualifications"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            aria-label="Open mobile menu"
          >
            <AiOutlineMenu size={24} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button 
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-label="Close Mobile Menu"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <LinkTemplate
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkTemplate
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkTemplate
                page="Articles"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkTemplate
                page="Qualifications"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkTemplate
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;