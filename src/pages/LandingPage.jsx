import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="sb-landing-container" id="home">
      <header className="sb-header">
        <Link to="/" className="sb-logo-link">
          <span className="sb-logo-text">Split Buds</span>
        </Link>
        <nav className="sb-main-nav">
          <a href="#home" className="sb-nav-link">
            Home
          </a>
          <a href="#features" className="sb-nav-link">
            Features
          </a>
          <a href="#about" className="sb-nav-link">
            About
          </a>
          <a href="#pricing" className="sb-nav-link">
            Pricing
          </a>
        </nav>
        <div className="sb-nav-btn">
          <Link to="/login">
            <button className="sb-btn navbtn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="sb-btn navbtn">Sign Up</button>
          </Link>
        </div>
      </header>

      <main className="sb-main-content">
        <section className="sb-hero-section">
          <div className="sb-container">
            <div className="sb-hero-grid">
              <div className="sb-hero-content">
                <div className="sb-hero-text">
                  <h1 className="sb-hero-title">
                    Simply Expenses, Simplify Friendships
                  </h1>
                  <p className="sb-hero-description">
                    Split Buds makes it easy to manage group expenses and track
                    your personal finances in one place.
                  </p>
                </div>
                <div className="sb-hero-buttons">
                  <Link to="/signup">
                    <button className="sb-btn sb-btn-primary">
                      Get Started
                    </button>
                  </Link>
                  <a href="#features">
                    <button className="sb-btn sb-btn-secondary">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
              <div className="sb-hero-image-container">
                <img
                  src="src\assets\1.png"
                  alt="Split Buds App Screenshot"
                  className="sb-hero-image"
                />
              </div>
            </div>

            <div className="sb-brand-partners">
              <p className="sb-brand-partners-title">Trusted Brand Partners</p>
              <div className="sb-brand-logos">
                <div className="sb-brand-logo">Axis Bank</div>
                <div className="sb-brand-logo">HDFC Bank</div>
                <div className="sb-brand-logo">Paypal</div>
                <div className="sb-brand-logo">GooglePay</div>
                <div className="sb-brand-logo">Paytm</div>
                <div className="sb-brand-logo">Splitswise</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="sb-features-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <h1 className="sb-badge">Features</h1>
              <h2 className="sb-section-title">Everything You Need</h2>
              <p className="sb-section-description">
                Split Buds offers a comprehensive suite of tools for both group
                expense splitting and personal finance management.
              </p>
            </div>

            <div className="sb-features-grid">
              <div className="sb-feature-card">
                <div className="sb-feature-icon">👥</div>
                <h3 className="sb-feature-title">Group Expense Splitting</h3>
                <p className="sb-feature-description">
                  Easily divide expenses among friends, colleagues, or family
                  members.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">💳</div>
                <h3 className="sb-feature-title">
                  Personal Expense Management
                </h3>
                <p className="sb-feature-description">
                  Track individual monthly expenses with detailed reports.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">📊</div>
                <h3 className="sb-feature-title">Expense Insights</h3>
                <p className="sb-feature-description">
                  Visualize spending patterns using graphs and charts.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">📝</div>
                <h3 className="sb-feature-title">Budget Management</h3>
                <p className="sb-feature-description">
                  Create monthly budgets and track spending against set limits.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">🌐</div>
                <h3 className="sb-feature-title">Multi-Currency Support</h3>
                <p className="sb-feature-description">
                  Ideal for international groups or travelers.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">💰</div>
                <h3 className="sb-feature-title">Payment Settlements</h3>
                <p className="sb-feature-description">
                  Track who owes whom and settle payments efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="sb-about-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <h1 className="sb-badge">About Us</h1>
              <h2 className="sb-section-title">See What Our Users Say</h2>
              <p className="sb-section-description">
                Don't just take our word for it. Here's what people are saying
                about Split Buds.
              </p>
            </div>

            <div className="sb-about-grid">
              <div className="sb-about-card">
                <p className="sb-about-text">
                  "Split Buds has completely transformed how my friends and I
                  manage expenses during our trips. No more awkward money
                  conversations!"
                </p>
                <div className="sb-about-author">
                  <p className="sb-author-name">Sarah Johnson</p>
                  <p className="sb-author-title">Travel Enthusiast</p>
                </div>
              </div>

              <div className="sb-about-card">
                <p className="sb-about-text">
                  "The analytics feature has helped me understand my spending
                  habits and save more money each month. Highly recommend!"
                </p>
                <div className="sb-about-author">
                  <p className="sb-author-name">Michael Chen</p>
                  <p className="sb-author-title">Financial Analyst</p>
                </div>
              </div>

              <div className="sb-about-card">
                <p className="sb-about-text">
                  "As a roommate in a shared apartment, Split Buds has made
                  managing our household expenses incredibly simple and
                  transparent."
                </p>
                <div className="sb-about-author">
                  <p className="sb-author-name">Emily Rodriguez</p>
                  <p className="sb-author-title">Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="sb-pricing-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <h1 className="sb-badge">Pricing</h1>
              <h2 className="sb-section-title">
                Find The Best Plan For Yourself
              </h2>
              <p className="sb-section-description">
                Choose the best monthly plan for your needs.{" "}
              </p>
            </div>

            <div className="sb-pricing-container">
              <div className="sb-pricing-card">
                <h3 className="sb-pricing-title">Basic</h3>
                <p className="sb-pricing-subtitle">
                  Our latest individual plan for casual users
                </p>

                <div className="sb-pricing-price">
                  <span className="sb-price">free</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">Up to 5 groups</li>
                  <li className="sb-pricing-feature">Basic expense tracking</li>
                  <li className="sb-pricing-feature">Simple reports</li>
                  <li className="sb-pricing-feature">Email support</li>
                </ul>
                <Link to="/signup" className="sb-pricing-action">
                  <button className="sb-btn sb-btn-primary ">
                    Get Started
                  </button>
                </Link>
              </div>

              <div className="sb-pricing-card sb-pricing-card-pro">
                <h3 className="sb-pricing-title">Pro</h3>
                <p className="sb-pricing-subtitle">
                  For active groups and frequent travelers
                </p>
                <div className="sb-pricing-price">
                  <span className="sb-price">&#8377;100/-</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">Unlimited groups</li>
                  <li className="sb-pricing-feature">Advanced analytics</li>
                  <li className="sb-pricing-feature">Multi-currency support</li>
                  <li className="sb-pricing-feature">Budget planning tools</li>
                </ul>
                <Link to="/signup" className="sb-pricing-action">
                  <button className="sb-btn sb-btn-primary">Get Started</button>
                </Link>
              </div>

              <div className="sb-pricing-card">
                <h3 className="sb-pricing-title">Business</h3>
                <p className="sb-pricing-subtitle">
                  For teams and organizations
                </p>
                <div className="sb-pricing-price">
                  <span className="sb-price">&#8377;200/-</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">Everything in Pro</li>
                  <li className="sb-pricing-feature">
                    Expense approval system
                  </li>
                  <li className="sb-pricing-feature">Custom reports</li>
                  <li className="sb-pricing-feature">Priority support</li>
                </ul>
                <Link to="/signup" className="sb-pricing-action">
                  <button className="sb-btn sb-btn-primary">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sb-cta-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <h2 className="sb-section-title">Ready to Get Started?</h2>
              <p className="sb-section-description">
                Join thousands of users who are already simplifying their
                expense management with Split Buds.
              </p>
            </div>
            <div className="sb-cta-buttons">
              <Link to="/signup">
                <button className="sb-btn sb-btn-primary">
                  Sign Up Now
                  <span className="sb-icon-arrow-right">→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="sb-footer">
        <div className="sb-copyright">
          © 2024 Split Buds. All rights reserved.
        </div>
        <div className="sb-footer-nav">
          <p className="sb-footer-link">Terms of Service</p>
          <p className="sb-footer-link">Privacy</p>
          <p className="sb-footer-link">Contact</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
