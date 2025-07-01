import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm <span>Shivam</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          A self-taught Front-End Developer who turns ideas, curiosity, and late-night coffee into clean, modern websites.
        </motion.p>
        <motion.a
          href="#contact"
          className={styles.cta}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s Connect
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
