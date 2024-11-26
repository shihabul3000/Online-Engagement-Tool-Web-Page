
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Features</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">Testimonials</li>
        <li className="nav-item">Resources</li>
        <li className="nav-item logo">
          <img src="/public/Images/circle logo.png" alt="logo" className="logo-img" />
          <span className="logo-text"></span>
        </li>
        <li className="nav-item">Company</li>
        <li className="nav-item">Contact</li>
        
        <li className="nav-item login">
          <button className="login-button">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

