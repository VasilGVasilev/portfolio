import Link from "next/link";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // the ring around the selected menu 
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  
  const notSelectedStyles = `bg-dark-grey hover:bg-yellow active:bg-yellow transition duration-200 hover:scale-110 active:scale-110 `

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        href="#home"
        className={`${selectedPage === "home" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <Link
        href="#skills"
        className={`${selectedPage === "skills" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <Link
        href="#projects"
        className={`${selectedPage === "projects" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <Link
        href="#testimonials"
        className={`${selectedPage === "testimonials" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")}
      />

      <Link
        href="#contact"
        className={`${selectedPage === "contact" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;