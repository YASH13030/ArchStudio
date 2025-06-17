import { motion } from 'framer-motion';
import TeamMember from '../../components/sections/TeamMember';
import './Studio.css';

const team = [
  {
    name: "Alex Johnson",
    role: "Principal Architect",
    bio: "With over 15 years of experience, Alex leads our design team with a focus on sustainable architecture.",
    image: "alex-johnson.jpg"
  },
  // Add more team members...
];

const Studio = () => {
  return (
    <div className="studio-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-header"
      >
        <h1>Our <span>Studio</span></h1>
        <p>Meet the creative minds behind our architectural masterpieces.</p>
      </motion.div>
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="studio-about"
      >
        <div className="about-content">
          <h2>Our Philosophy</h2>
          <p>We believe architecture should harmonize with its environment while meeting the functional needs of its users. Our approach combines innovative design with sustainable practices to create spaces that stand the test of time.</p>
          <p>Founded in 2010, our studio has grown from a small practice to an award-winning firm with projects across the country.</p>
        </div>
        <div className="about-image">
          <img src="/images/studio-office.jpg" alt="Our studio" />
        </div>
      </motion.section>
      
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Studio;