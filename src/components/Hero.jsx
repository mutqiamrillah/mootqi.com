import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <Image
        src="/images/amril.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Amril's personal headshot"
      /> */}
      <div className="hero-text">
        {/* <h1 className="text-4xl font-bold text-left mb-3">Hey, I'm Amril 👋</h1> */}
        <h1 className="font-sans text-4xl font-bold text-left mb-3">
          Amril is a frontend developer who specializes in user interface and
          system design, who also has experience in creating Rest APIs and
          server maintenance.
        </h1>
        <p className="font-mono text-large text-white text-left">
          Currently, I work at KlikDokter, where I design Landing Pages,
          Healthcare Booking, E-Prescription and other health services.
          Previously, I also gained valuable experience working as a Web and API
          Developer for Campaign.com.
        </p>
        <Link href="/resume" className="cta-btn animate-bounce mt-5 mb-10">
          Resume
        </Link>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mootqi/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/mutqiamrillah"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mutqi-amrillah-694470146/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
