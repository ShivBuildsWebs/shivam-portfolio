import { useState } from "react";
import styles from "./Projects.module.css";
import DynamicLoader from "../../DynamicLoader";

const projects = [
  {
    title: "Tech Site",
    description:
      "I built this website using HTML and CSS, focusing on modern layouts with CSS Grid and Flexbox. The project showcases clean design, responsive structure, and attention to detail in styling.",
    image: "/Techsite.png",
    link: "https://shivbuildswebs.github.io/html-css-tech-site/",
  },
  {
    title: "Cafe Delight",
    description:
      "I created this multi-page website using HTML and CSS to showcase a modern café brand. Each page highlights different content with consistent design, responsive layouts, and smooth navigation.",
    image: "/Cafedelight.png",
    link: "https://shivbuildswebs.github.io/html-css-Cafe-Delight/",
  },
  {
    title: "Tindog",
    description:
      "I developed this website entirely with Bootstrap, using its components, grid system, and utilities to build a clean, responsive design quickly and efficiently. The project demonstrates how powerful Bootstrap can be for creating professional layouts without custom CSS.",
    image: "/Tindog.png",
    link: "https://shivbuildswebs.github.io/My-Portfolio/Tindog/index.html",
  },
  {
    title: "Form",
    description:
      "I built this form using HTML and CSS, featuring fields for user input, including a secure password entry. The project focuses on clean design, user-friendly layout, and basic form validation to improve the user experience.",
    image: "/GridForm.png",
    link: "https://shivbuildswebs.github.io/My-Portfolio/Form/index.html",
  },
  {
    title: "Dice Game",
    description:
      "I developed this interactive dice game entirely with HTML, CSS, and JavaScript, without using any images to represent the dice. Instead, I dynamically generated the dice faces and implemented game logic that updates results in real time. The project focuses on clean UI, smooth gameplay, and intuitive controls that make the experience engaging and easy to use.",
    image: "/Dicegame.png",
    link: "https://shivbuildswebs.github.io/dice-game/",
  },
  {
    title: "Simon Game",
    description:
      "I created this Simon Game using pure HTML, CSS, and JavaScript without any external libraries. The game features dynamic color sequences, responsive visual feedback, and intuitive controls that challenge players to improve their memory. It demonstrates my ability to build complex interactive experiences from the ground up with clean, maintainable code.",
    image: "/Simongame.png",
    link: "https://shivbuildswebs.github.io/Simon-Game/",
  },
];

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleViewProject = (title: string, link: string) => {
    setLoadingText(`Loading ${title}...`);
    setLoading(true);

    setTimeout(() => {
      window.open(link, "_blank");
      setLoading(false);
    }, 1800); // loader visible for 1.8s
  };

  return (
    <section className={styles.projectsSection} id="projects">
      {loading && <DynamicLoader text={loadingText} />}
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => handleViewProject(project.title, project.link)}>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
