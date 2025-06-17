import { motion } from 'framer-motion';
import './ServiceCard.css';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps)=> {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="service-card"
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;