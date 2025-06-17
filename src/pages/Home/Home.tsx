import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../../components/sections/Hero';
import ProjectCard from '../../components/sections/ProjectCard';
import ServiceCard from '../../components/sections/ServiceCard';
import TeamMember from '../../components/sections/TeamMember';
import './Home.css';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample data for demonstration - replace with your actual data
  const featuredProject = {
    id: 1,
    title: "Modern Beach House",
    type: "Residential",
    year: 2023,
    location: "Malibu, CA",
    image: "beach-house.jpg",
    description: "A contemporary beachfront property with sustainable materials"
  };

  const featuredService = {
    title: "Architectural Design",
    description: "From concept to completion, we create spaces that inspire and function beautifully.",
    icon: "🏛️",
    features: [
      "Concept development",
      "3D modeling",
      "Construction documents",
      "Permit processing"
    ]
  };

  const featuredTeamMember = {
    name: "Alex Johnson",
    role: "Principal Architect",
    bio: "With over 15 years of experience, Alex leads our design team with a focus on sustainable architecture.",
    image: "alex-johnson.jpg"
  };

  return (
    <div className="home-page">
      <Hero />
      
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="section featured-projects"
      >
        <h2 className="section-title">Featured Project</h2>
        <ProjectCard project={featuredProject} />
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="section services-preview"
      >
        <h2 className="section-title">Our Services</h2>
        <ServiceCard service={featuredService} />
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="section team-showcase"
      >
        <h2 className="section-title">Meet Our Team</h2>
        <TeamMember member={featuredTeamMember} />
      </motion.section>
    </div>
  );
};

export default Home;