import Link from "next/link";


const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <Link
          className="hover:opacity-50 transition duration-300"
          href="https://github.com/VasilGVasilev"
          // open new tab
          target="_blank"
          // no bugs with older browsers
          rel="noreferrer"
        >
          <img alt="github-link" src="/assets/github.webp" />
        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="https://uk.linkedin.com/in/vasil-vasilev-28621b178"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="/assets/linkedin.webp" />
        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="mailto:vgvmail97@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gmail-link" src="/assets/gmail.webp" />
        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="tel:+359884336793"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="phone-link" src="/assets/phone.webp" />
        </Link>

      </div>
    );
  };
  
  export default SocialMediaIcons;