import { motion } from 'framer-motion';
import ServiceCard from '../../components/sections/ServiceCard';
import './Services.scss';

const services = [
  {
    title: "Architectural Design",
    description: "From concept to completion, we create spaces that inspire and function beautifully.",
    icon: "🏛️",
    features: [
      "Concept development",
      "3D modeling",
      "Construction documents",
      "Permit processing"
    ]
  },
  // Add more services...
];

const Services = () => {
  return (
    <div className="services-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-header"
      >
        <h1>Our <span>Services</span></h1>
        <p>Comprehensive architectural solutions tailored to your unique needs and vision.</p>
      </motion.div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;