import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Education.module.css";

const tabs = [
  {
    label: "Niagara College, Naiagra Falls, Canada",
    content:
      "Before pursuing Computer Applications, I studied General Science at Niagara College. During my time there, I discovered my passion for technology and the creative potential of web development. Exploring different fields sparked my interest in building digital experiences and inspired me to start learning programming and IT more seriously."
  },
  {
    label: "Cambrian College, Toronto, Canada",
    content:
      "I also studied Accounting and Business at Cambrian College. This experience taught me the importance of organization, problem-solving, and clear communication—skills that have proven invaluable in my transition to web development. Understanding how businesses work has given me a unique perspective on building websites that not only look great but also support real goals and deliver results.",
  },
  {
    label: "Self-Learning",
    content:
      "Beyond formal education, I’ve dedicated countless hours to teaching myself web development. Through online courses, tutorials, and hands-on projects, I’ve built a strong foundation in HTML, CSS, JavaScript, and React. I believe the best way to learn is by doing, and I’m always exploring new tools and technologies to keep improving my skills and stay up to date in this fast-moving field.",
  },
];

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? styles.active : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={styles.content}
        >
          <p>{tabs[activeTab].content}</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Education;
