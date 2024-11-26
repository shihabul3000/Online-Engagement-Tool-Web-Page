import './Footer.css';



const Footer = () => {
    return (
      <>
      
      <div className="footer">
      <div className="footer-content">
        <div className="location">
          <img src="/public/Images/footer pic.png" alt="Location" />
          <p>Made with lots of ❤️ in San Francisco</p>
        </div>
        <div className="links">
          <div className="column">
            <h3>Products</h3>
            <p>Delta</p>
            <p>Sigma</p>
            <p>Zeta</p>
            <p>Alpha</p>
            <p>Acumen</p>
          </div>
          <div className="column">
            <h3>Resources</h3>
            <p>Help</p>
            <p>Training Videos</p>
            <p>Webinars</p>
            <p>Request a Demo</p>
            <p>Create Surveys</p>
            <p>Quiz Maker</p>
          </div>
          <div className="column">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2022 Circle. All rights reserved.</p>
        <div className="social-icons">
          <img src="/public/Images/footer linked in.png" alt="LinkedIn" />
          <img src="/public/Images/footer twitter.png" alt="Twitter" />
        </div>
        <p>Privacy Policy | Data & Security | Terms of Service | Data & Security</p>
      </div>
    </div>
      
      
      
      
      
      
      </>
    );
};

export default Footer;