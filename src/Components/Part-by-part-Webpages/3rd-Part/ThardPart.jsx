import './ThardPart.css'

const ThardPart = () => {
    return (
        <>
        
        <section className="tool-section">
      {/* Text Section */}
      <div className="text-content">
        <span className="subheading">Our Promise</span>
        <h2 className="heading">
          Tool <strong>built for people.</strong>
        </h2>
        <p className="description">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom.
        </p>
        <p className="description">
          Circle has 100+ integrations with tools you already use and love.
        </p>
        <button className="cta-button">Get started free</button>
      </div>

      {/* Image Section */}
      <div className="image-content">
        <img
          src="/public/Images/3rd pic.png"
          alt="Team Collaboration"
          className="team-image"
        />
      </div>
    </section>
        
        
        
        </>
    );
};

export default ThardPart;