import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

interface Project {
  id: number;
  title: string;
  type: string;
  year: number;
  location: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="project-card"
    >
      <div className="project-image">
        <img src={`/images/${project.image}`} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
          <span>{project.location}</span>
        </div>
        <p>{project.description}</p>
        <Link to={`/projects/${project.id}`} className="view-button">
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;