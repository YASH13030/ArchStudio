import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/sections/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Modern Beach House",
    type: "Residential",
    year: 2023,
    location: "Malibu, CA",
    image: "beach-house.jpg",
    description: "A contemporary beachfront property with sustainable materials"
  },
  // Add more projects...
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="projects-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-header"
      >
        <h1>Our <span>Projects</span></h1>
        <p>Explore our portfolio of architectural excellence, where innovative design meets functional beauty.</p>
      </motion.div>
      
      <div className="filter-controls">
        {['all', 'residential', 'commercial', 'institutional'].map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="projects-grid"
      >
        {projects
          .filter(project => activeFilter === 'all' || project.type.toLowerCase() === activeFilter)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </motion.div>
    </div>
  );
};

export default Projects;