import styles from './ProjectsStyles.module.css';
import infowood from '../../assets/infowood.png';
import freshBurger from '../../assets/autobill.png';
import hipsster from '../../assets/aiimg.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="DALL-E 2.0"
          p="MERN AI Generation App"
        />
         <ProjectCard
          src={infowood}
          link="https://github.com/AtharvaMagre123/Infowood"
          h3="Infowood"
          p="Movie Rating App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/AtharvaMagre123/Autobilling-System/tree/main"
          h3="Autobilling App"
          p="An Automated Billing System"
        />
       
      </div>
    </section>
  );
}

export default Projects;
