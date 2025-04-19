import '../styles/Login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="form-container">
          <h1>Welcome Back!</h1>
          <p>Log in to manage your shared expenses and settle up with friends.</p>
          
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <Link to='/dashboard'> 
            <button className="login-button">Log In</button>
            </Link>

            <div className="separator">
              <hr /> <span> or </span><hr />
            </div>

            <div className="social-buttons">
              <button className="social-button">Google</button>
              <button className="social-button">Facebook</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-section">
        <img src="/src/assets/1.png" alt="Friends splitting expenses" className="login-image" />
        <h2 style={{marginBottom: "1rem", color: "white"}}>Why SplitBuds?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Splitting</h3>
            <p>Split bills equally or by custom amounts</p>
          </div>
          <div className="feature-card">
            <h3>Group Management</h3>
            <p>Create and manage multiple expense groups</p>
          </div>
          <div className="feature-card">
            <h3>Instant Settlements</h3>
            <p>Get the simplest way to settle debts</p>
          </div>
          <div className="feature-card">
            <h3>Transaction History</h3>
            <p>Track all your shared expenses easily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
