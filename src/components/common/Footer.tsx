import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ARCHSTUDIO</h3>
          <p>Creating spaces that inspire and endure.</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">LI</a>
            <a href="#">TW</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            123 Design Avenue<br />
            Creative District, CA 90210<br />
            hello@archstudio.com<br />
            +1 (555) 123-4567
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ArchStudio</p>
      </div>
    </footer>
  );
};

export default Footer;