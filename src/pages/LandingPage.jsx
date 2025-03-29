import { Link } from 'react-router-dom';
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="sb-landing-container">
      <header className="sb-header">
        <Link to="/" className="sb-logo-link">
          <div className="sb-logo-icon">$</div>
          <span className="sb-logo-text">Split Buds</span>
        </Link>
        <nav className="sb-main-nav">
          <a href="#features" className="sb-nav-link">Features</a>
          <a href="#testimonials" className="sb-nav-link">Testimonials</a>
          <a href="#pricing" className="sb-nav-link">Pricing</a>
        </nav>
        <div className="sb-auth-buttons">
          <Link to="/login">
            <button className="sb-btn sb-btn-ghost">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="sb-btn sb-btn-primary">Sign Up</button>
          </Link>
        </div>
      </header>
      
      <main className="sb-main-content">
        <section className="sb-hero-section">
          <div className="sb-container">
            <div className="sb-hero-grid">
              <div className="sb-hero-content">
                <div className="sb-hero-text">
                  <h1 className="sb-hero-title">Split Expenses, Simplify Life, Simplify Groups</h1>
                  <p className="sb-hero-description">
                    Split Buds makes it easy to manage group expenses and track your personal finances in one place.
                  </p>
                </div>
                <div className="sb-hero-buttons">
                  <Link to="/signup">
                    <button className="sb-btn sb-btn-primary sb-btn-lg">
                      Get Started
                      <span className="sb-icon-arrow-right">→</span>
                    </button>
                  </Link>
                  <a href="#features">
                    <button className="sb-btn sb-btn-outline sb-btn-lg">Learn More</button>
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
            
            {/* Brand Partners Section */}
            <div className="sb-brand-partners">
              <p className="sb-brand-partners-title">Trusted By Leading Companies</p>
              <div className="sb-brand-logos">
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Airbnb" alt="Airbnb" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Airbnb" alt="Airbnb" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Airbnb" alt="Airbnb" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Uber" alt="Uber" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Wise" alt="Wise" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Revolut" alt="Revolut" />
                </div>
                <div className="sb-brand-logo">
                  <img src="https://placehold.co/120x40/121212/4895ef?text=Expedia" alt="Expedia" />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="sb-features-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <div className="sb-badge">Features</div>
              <h2 className="sb-section-title">Everything You Need</h2>
              <p className="sb-section-description">
                Split Buds offers a comprehensive suite of tools for both group expense splitting and personal finance
                management.
              </p>
            </div>
            
            <div className="sb-features-grid">
              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Group Expense Splitting</h3>
                <p className="sb-feature-description">
                  Easily divide expenses among friends, colleagues, or family members.
                </p>
              </div>
              
              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Personal Expense Management</h3>
                <p className="sb-feature-description">
                  Track individual monthly expenses with detailed reports.
                </p>
              </div>
              
              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Expense Insights</h3>
                <p className="sb-feature-description">
                  Visualize spending patterns using graphs and charts.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Budget Management</h3>
                <p className="sb-feature-description">
                  Create monthly budgets and track spending against set limits.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Multi-Currency Support</h3>
                <p className="sb-feature-description">
                  Ideal for international groups or travelers.
                </p>
              </div>

              <div className="sb-feature-card">
                <div className="sb-feature-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="sb-feature-title">Payment Settlements</h3>
                <p className="sb-feature-description">
                  Track who owes whom and settle payments efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="sb-testimonials-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <div className="sb-badge">Testimonials</div>
              <h2 className="sb-section-title">What Our Users Say</h2>
              <p className="sb-section-description">
                Don't just take our word for it. Here's what people are saying about Split Buds.
              </p>
            </div>
            
            <div className="sb-testimonials-grid">
              <div className="sb-testimonial-card">
                <p className="sb-testimonial-text">
                  "Split Buds has completely transformed how my friends and I manage expenses during our trips. No
                  more awkward money conversations!"
                </p>
                <div className="sb-testimonial-author">
                  <div className="sb-author-avatar"></div>
                  <div className="sb-author-info">
                    <p className="sb-author-name">Sarah Johnson</p>
                    <p className="sb-author-title">Travel Enthusiast</p>
                  </div>
                </div>
              </div>
              
              <div className="sb-testimonial-card">
                <p className="sb-testimonial-text">
                  "The analytics feature has helped me understand my spending habits and save more money each month.
                  Highly recommend!"
                </p>
                <div className="sb-testimonial-author">
                  <div className="sb-author-avatar"></div>
                  <div className="sb-author-info">
                    <p className="sb-author-name">Michael Chen</p>
                    <p className="sb-author-title">Financial Analyst</p>
                  </div>
                </div>
              </div>
              
              <div className="sb-testimonial-card">
                <p className="sb-testimonial-text">
                  "As a roommate in a shared apartment, Split Buds has made managing our household expenses incredibly
                  simple and transparent."
                </p>
                <div className="sb-testimonial-author">
                  <div className="sb-author-avatar"></div>
                  <div className="sb-author-info">
                    <p className="sb-author-name">Emily Rodriguez</p>
                    <p className="sb-author-title">Graduate Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="sb-pricing-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <div className="sb-badge">Pricing</div>
              <h2 className="sb-section-title">Simple, Transparent Pricing</h2>
              <p className="sb-section-description">
                Choose the plan that works best for you and your group.
              </p>
            </div>
            
            <div className="sb-pricing-grid">
              <div className="sb-pricing-card">
                <div className="sb-pricing-header">
                  <h3 className="sb-pricing-title">Free</h3>
                  <p className="sb-pricing-subtitle">Perfect for individuals and small groups</p>
                </div>
                <div className="sb-pricing-price">
                  <span className="sb-price">$0</span>
                  <span className="sb-period">/month</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Up to 5 groups
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Basic expense tracking
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Simple reports
                  </li>
                </ul>
                <div className="sb-pricing-action">
                  <Link to="/signup">
                    <button className="sb-btn sb-btn-primary sb-btn-full">Get Started</button>
                  </Link>
                </div>
              </div>
              
              <div className="sb-pricing-card sb-pricing-card-highlight">
                <div className="sb-pricing-header">
                  <h3 className="sb-pricing-title">Pro</h3>
                  <p className="sb-pricing-subtitle">For active groups and frequent travelers</p>
                </div>
                <div className="sb-pricing-price">
                  <span className="sb-price">$9.99</span>
                  <span className="sb-period">/month</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Unlimited groups
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Advanced analytics
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Multi-currency support
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Budget planning tools
                  </li>
                </ul>
                <div className="sb-pricing-action">
                  <Link to="/signup">
                    <button className="sb-btn sb-btn-primary sb-btn-full">Get Started</button>
                  </Link>
                </div>
              </div>
              
              <div className="sb-pricing-card">
                <div className="sb-pricing-header">
                  <h3 className="sb-pricing-title">Business</h3>
                  <p className="sb-pricing-subtitle">For teams and organizations</p>
                </div>
                <div className="sb-pricing-price">
                  <span className="sb-price">$19.99</span>
                  <span className="sb-period">/month</span>
                </div>
                <ul className="sb-pricing-features">
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Everything in Pro
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Expense approval system
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Custom reports
                  </li>
                  <li className="sb-pricing-feature">
                    <span className="sb-check-icon">✓</span>
                    Priority support
                  </li>
                </ul>
                <div className="sb-pricing-action">
                  <Link to="/signup">
                    <button className="sb-btn sb-btn-primary sb-btn-full">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="sb-cta-section">
          <div className="sb-container">
            <div className="sb-section-header">
              <h2 className="sb-section-title">Ready to Get Started?</h2>
              <p className="sb-section-description">
                Join thousands of users who are already simplifying their expense management with Split Buds.
              </p>
            </div>
            <div className="sb-cta-buttons">
              <Link to="/signup">
                <button className="sb-btn sb-btn-primary sb-btn-lg">
                  Sign Up Now
                  <span className="sb-icon-arrow-right">→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="sb-footer">
        <p className="sb-copyright">© 2024 Split Buds. All rights reserved.</p>
        <nav className="sb-footer-nav">
          <a href="#" className="sb-footer-link">Terms of Service</a>
          <a href="#" className="sb-footer-link">Privacy</a>
          <a href="#" className="sb-footer-link">Contact</a>
        </nav>
      </footer>
    </div>
  );
}

export default LandingPage;