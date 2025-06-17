import { motion } from 'framer-motion';
import './TeamMember.scss';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="team-member"
    >
      <div className="member-image">
        <img src={`/images/team/${member.image}`} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="bio">{member.bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;