import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero-background.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Architecture background" />
        <div className="overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Designing <span>Spaces</span> That Inspire
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Innovative architecture that blends functionality with aesthetic excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <button className="primary-button">View Projects</button>
          <button className="secondary-button">Contact Us</button>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="scroll-indicator"
      >
        <div className="scroll-icon">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-dot"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;