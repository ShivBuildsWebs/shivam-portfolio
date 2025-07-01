import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I’m a self-taught Front-End Developer passionate about building clean, modern websites that connect with people.

I have a strong foundation in HTML, CSS, and JavaScript, and I’m continuously expanding my skills with frameworks like Tailwind CSS, Bootstrap, and React.

Every project I build is an opportunity to learn, improve, and push the limits of what I can create.

I believe great work comes from curiosity, persistence, and a commitment to never stop growing.
        </p>
      </motion.div>
      <motion.div
        className={styles.image}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        
      </motion.div>
    </section>
  );
};

export default About;
