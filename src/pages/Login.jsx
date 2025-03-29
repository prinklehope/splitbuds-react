import React from 'react';
import '../styles/Login.css';

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

            <button type="submit" className="login-button">Log In</button>

            <div className="separator">
              <hr /><span>or</span><hr />
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
          {[
            { title: 'Smart Splitting', desc: 'Split bills equally or by custom amounts' },
            { title: 'Group Management', desc: 'Create and manage multiple expense groups' },
            { title: 'Instant Settlements', desc: 'Get the simplest way to settle debts' },
            { title: 'Transaction History', desc: 'Track all your shared expenses easily' }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
