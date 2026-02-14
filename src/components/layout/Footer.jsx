import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Mahmoud Tarek. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/mahmoudtarek10" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mahmoud-tarek-01bba731b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/201063946263" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="mailto:mahmoudtarekhassan3050@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
