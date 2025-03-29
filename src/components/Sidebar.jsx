import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Icons = {
  DollarSign: () => <span className="icon">💲</span>,
  Home: () => <span className="icon">🏠</span>,
  Users: () => <span className="icon">👥</span>,
  CreditCard: () => <span className="icon">💳</span>,
  BarChart3: () => <span className="icon">📊</span>,
  PieChart: () => <span className="icon">🥧</span>,
  Settings: () => <span className="icon">⚙️</span>,
  LogOut: () => <span className="icon">🚪</span>,
  X: () => <span className="icon">✕</span>
};

const Sidebar = ({ isMobile = false, onClose, currentPath = '/dashboard' }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <Icons.DollarSign />
          <span>Split Buds</span>
        </Link>
        {isMobile && (
          <button 
            className="close-sidebar-btn" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <Icons.X />
          </button>
        )}
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${currentPath === '/dashboard' ? 'active' : ''}`}>
          <Icons.Home />
          Dashboard
        </Link>
        <Link to="/dashboard/groups" className={`nav-item ${currentPath.includes('/groups') ? 'active' : ''}`}>
          <Icons.Users />
          My Groups
        </Link>
        <Link to="/dashboard/expenses" className={`nav-item ${currentPath.includes('/expenses') ? 'active' : ''}`}>
          <Icons.CreditCard />
          Expenses
        </Link>
        <Link to="/dashboard/analytics" className={`nav-item ${currentPath.includes('/analytics') ? 'active' : ''}`}>
          <Icons.BarChart3 />
          Analytics
        </Link>
        <Link to="/dashboard/budgets" className={`nav-item ${currentPath.includes('/budgets') ? 'active' : ''}`}>
          <Icons.PieChart />
          Budgets
        </Link>
        <Link to="/dashboard/settings" className={`nav-item ${currentPath.includes('/settings') ? 'active' : ''}`}>
          <Icons.Settings />
          Settings
        </Link>
      </nav>
      <div className="sidebar-footer">
        <div className="user-profile">
          <img 
            src="/placeholder-user.jpg" 
            alt="User" 
            className="user-avatar" 
          />
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-email">john.doe@example.com</span>
          </div>
          <button className="logout-btn" aria-label="Log out">
            <Icons.LogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;