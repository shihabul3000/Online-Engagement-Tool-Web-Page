import './FifthPart.css'

const FifthPart = () => {
    return (
        <div className="create-section">
          <div className="create-header">
            <span className="tagline">BUILT FOR PEOPLE</span>
            <h1 className="title">
              Easy for beginners. <span className="bold">Powerful</span> for experts.
            </h1>
          </div>
    
          <div className="tabs">
            <div className="tab active">📝 Create</div>
            <div className="tab">🔄 Distribute</div>
            <div className="tab">📋 Collect</div>
            <div className="tab">📊 Analyze</div>
          </div>
    
          <div className="create-content">
            <div className="text-content">
              <h2>Create</h2>
              <h3>Advanced research software</h3>
              <p>
                Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.
              </p>
              <button className="cta-button">Get started for free</button>
            </div>
            <div className="image-content">
              <img
                src="/public/Images/fifth part pic.png"
                alt="Create section illustration"
              />
            </div>
          </div>
        </div>
    )
};

export default FifthPart;