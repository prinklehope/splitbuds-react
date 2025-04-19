import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ currentPath = "/dashboard" }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="" alt="" className="logo-icon"></img>
        <Link to="/" className="logo-link">
        <span className="logo-text">Split Buds</span> 
        </Link>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item home-icon ${currentPath === "/dashboard" ? "active" : ""}`}
        >Dashboard
        </Link>
        <Link
          to="/dashboard/groups"
          className={`nav-item groups-icon ${
            currentPath.includes("/groups") ? "active" : ""
          }`}
        >
          My Groups
        </Link>
        <Link
          to="/dashboard/expenses"
          className={`nav-item expenses-icon ${
            currentPath.includes("/expenses") ? "active" : ""
          }`}
        >
          Expenses
        </Link>
        <Link to="#" className={`nav-item settings-icon`}>
          Settings
        </Link>
        <Link to="#" className={`nav-item help-icon`}>
          Help Center
        </Link>
      </nav>
      <div className="sidebar-footer">
        <div className="user-profile">
          <img src="" alt="User Avatar" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-email">john.doe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
