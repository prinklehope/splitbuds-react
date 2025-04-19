import "../styles/Signup.css";
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
      <img src="/src/assets/1.png" alt="Friends splitting expenses" className="login-image" />
        <div>
          <h2>Join thousands of users who trust SplitBuds</h2>
          <div className="benefits">
            <div className="benefit-card">
              <h3>Smart Expense Tracking</h3>
              <p>Automatically categorize and track all your shared expenses</p>
            </div>
            <div className="benefit-card">
              <h3>Simplified Settlements</h3>
              <p>Get intelligent suggestions for settling group expenses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-form">
          <div className="form-header">
            <h1>Create Your Account</h1>
            <p>Start managing shared expenses effortlessly</p>
          </div>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email"
                
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="Create a password"
                
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm your password"
                
              />
            </div>
            <Link to="/dashboard"> 
            <button className="signup-button">
              Create Account
            </button>
            </Link>
            <div className="login-link">
              <p>Already have an account? <a href="#login">Log In</a></p>
            </div>
            <div className="social-signup">
              <button type="button" className="social-btn">
                Google
              </button>
              <button type="button" className="social-btn">
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;