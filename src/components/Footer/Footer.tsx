import { useState } from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import DynamicLoader from "../../DynamicLoader";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string, url: string) => {
    e.preventDefault();
    setLoadingText(`Opening ${platform}...`);
    setLoading(true);

    // Make sure this matches DynamicLoader fade duration + buffer
    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 3500);
  };

  return (
    <footer className={styles.footer}>
      {loading && <DynamicLoader text={loadingText} />}
      <div className={styles.socials}>
        <a
          href="https://github.com/ShivBuildsWebs"
          onClick={(e) => handleLinkClick(e, "GitHub", "https://github.com/ShivBuildsWebs")}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shivbuildswebs/"
          onClick={(e) => handleLinkClick(e, "LinkedIn", "https://www.linkedin.com/in/shivbuildswebs/")}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/white._.melvin/"
          onClick={(e) => handleLinkClick(e, "Instagram", "https://www.instagram.com/white._.melvin/")}
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:ssemwal116@gmail.com"
          onClick={(e) => handleLinkClick(e, "Email", "mailto:ssemwal116@gmail.com")}
        >
          <FaEnvelope />
        </a>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Shivam Semwal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
