import './SixthPart.css'

const SixthPart = () => {
    return (
      <>
      
      <div className="testimonials-section">
      <div className="testimonials-content">
        <div className="text-section">
          <div className="heading-label">TESTIMONIALS</div>
          <h2>
            See how customers <span className="highlight">drive impact</span>
          </h2>
          <button className="case-studies-btn">See case studies</button>
        </div>
        <div className="video-section">
          <div className="video-container">
            <img
              src="/public/Images/sixth pic.png" // Replace with your actual image link
              alt="Customer"
              className="video-thumbnail"
            />
            <div className="play-button">▶</div>
          </div>
          <div className="testimonial-quote">
            <div className="company-logo">
              <img
                src="/public/Images/paypal logo.png" 
                alt="PayPal Logo"
                className="company-logo-img"
              />
            </div>
            <p>
              `I used to have a bunch of different tools I had to pay for, with
              Circle you get everything in one bundle.`
            </p>
            <span className="author">Michel Dedrick</span>
            <br />
            <span className="designation">Senior Conversion Optimizer</span>
          </div>
        </div>
      </div>
      <div className="navigation-arrows">
        <div className="arrow left-arrow">❮</div>
        <div className="arrow right-arrow">❯</div>
      </div>
    </div>


      
      
      </>
    );
};

export default SixthPart;