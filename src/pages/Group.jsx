import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Group.css';

import { 
  DollarSign, Menu, X, Plus, Search
} from 'lucide-react';

export default function GroupsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close sidebar when window resizes to desktop view
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dummy data (same as original)
  const groups = [
    {
      id: 1,
      name: "Roommates",
      description: "Shared apartment expenses",
      members: [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "/placeholder-user.jpg" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "/placeholder.svg" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", avatar: "/placeholder.svg" },
      ],
      totalExpenses: 1250.75,
      owedToYou: 420.25,
      youOwe: 0,
      recentActivity: "Utility bill added by Jane Smith",
    },
    {
      id: 2,
      name: "Weekend Trip",
      description: "Beach vacation expenses",
      members: [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "/placeholder-user.jpg" },
        { id: 4, name: "Sarah Wilson", email: "sarah@example.com", avatar: "/placeholder.svg" },
        { id: 5, name: "Tom Brown", email: "tom@example.com", avatar: "/placeholder.svg" },
        { id: 6, name: "Lisa Green", email: "lisa@example.com", avatar: "/placeholder.svg" },
        { id: 7, name: "Alex Taylor", email: "alex@example.com", avatar: "/placeholder.svg" },
      ],
      totalExpenses: 2450.5,
      owedToYou: 0,
      youOwe: 185.5,
      recentActivity: "Hotel payment added by Tom Brown",
    },
    {
      id: 3,
      name: "Friends Night Out",
      description: "Dinner and entertainment",
      members: [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "/placeholder-user.jpg" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "/placeholder.svg" },
        { id: 5, name: "Tom Brown", email: "tom@example.com", avatar: "/placeholder.svg" },
        { id: 7, name: "Alex Taylor", email: "alex@example.com", avatar: "/placeholder.svg" },
      ],
      totalExpenses: 320.0,
      owedToYou: 80.0,
      youOwe: 0,
      recentActivity: "Movie tickets added by John Doe",
    },
    {
      id: 4,
      name: "Office Lunch",
      description: "Weekly team lunch expenses",
      members: [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "/placeholder-user.jpg" },
        { id: 8, name: "Emily Davis", email: "emily@example.com", avatar: "/placeholder.svg" },
        { id: 9, name: "David Miller", email: "david@example.com", avatar: "/placeholder.svg" },
        { id: 10, name: "Sophia Lee", email: "sophia@example.com", avatar: "/placeholder.svg" },
        { id: 11, name: "James Wilson", email: "james@example.com", avatar: "/placeholder.svg" },
        { id: 12, name: "Olivia Martin", email: "olivia@example.com", avatar: "/placeholder.svg" },
      ],
      totalExpenses: 180.0,
      owedToYou: 0,
      youOwe: 30.0,
      recentActivity: "Restaurant bill added by Emily Davis",
    },
  ];

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleCreateGroup = () => {
    console.log('Creating group:', { name: newGroupName, description: newGroupDescription });
    setNewGroupName('');
    setNewGroupDescription('');
    setIsDialogOpen(false);
  };

  return (
    <div className="dashboard">
      {window.innerWidth <= 768 && isMobileMenuOpen && (
        <Sidebar 
          isMobile={true} 
          onClose={() => setIsMobileMenuOpen(false)}
          currentPath={location.pathname}
        />
      )}
      {window.innerWidth > 768 && (
        <Sidebar 
          isMobile={false}
          currentPath={location.pathname}
        />
      )}
      
      <div className="main-content">
        <header className="main-header">
          {window.innerWidth <= 768 && (
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          )}
          <h1>My Groups</h1>
          <button 
            className="new-expense-btn" 
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus />
            <span>New Group</span>
          </button>
        </header>

        {isDialogOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>Create New Group</h2>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setIsDialogOpen(false)}
                  aria-label="Close modal"
                >
                  <X />
                </button>
              </div>
              
              <div className="modal-body">
                <p>Create a new group to start splitting expenses with friends, family, or colleagues.</p>
                
                <div className="form-group">
                  <label htmlFor="group-name">Group Name</label>
                  <input
                    id="group-name"
                    placeholder="e.g., Roommates, Trip to Paris"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="group-description">Description (Optional)</label>
                  <input
                    id="group-description"
                    placeholder="e.g., For our shared apartment expenses"
                    value={newGroupDescription}
                    onChange={(e) => setNewGroupDescription(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="modal-footer">
                <button 
                  className="btn btn-cancel" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-create" 
                  onClick={handleCreateGroup}
                >
                  Create Group
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="dashboard-main">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="search"
              placeholder="Search groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="groups-grid">
            {filteredGroups.map((group) => (
              <div key={group.id} className="group-card card">
                <div className="group-header">
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </div>
                
                <div className="group-members">
                  <div className="avatar-group">
                    {group.members.slice(0, 5).map((member) => (
                      <img 
                        key={member.id} 
                        src={member.avatar} 
                        alt={member.name} 
                        className="member-avatar" 
                      />
                    ))}
                    {group.members.length > 5 && (
                      <div className="member-overflow">
                        +{group.members.length - 5}
                      </div>
                    )}
                  </div>
                  <span className="members-count">{group.members.length} Members</span>
                </div>
                
                <div className="group-financials">
                  <div className="financial-row">
                    <span>Total Expenses:</span>
                    <span>${group.totalExpenses.toFixed(2)}</span>
                  </div>
                  
                  {group.owedToYou > 0 && (
                    <div className="financial-row positive">
                      <span>Owed to you:</span>
                      <span>${group.owedToYou.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {group.youOwe > 0 && (
                    <div className="financial-row negative">
                      <span>You owe:</span>
                      <span>${group.youOwe.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <div className="recent-activity">
                  <div className="activity-label">Recent Activity:</div>
                  <div className="activity-text">{group.recentActivity}</div>
                </div>
                
                <button className="group-details-btn">
                  View Details
                </button>
              </div>
            ))}
            
            <div className="card new-group-card">
              <div className="new-group-content">
                <div className="new-group-icon">
                  <Plus />
                </div>
                <h3>Create New Group</h3>
                <p>Start splitting expenses with friends or colleagues</p>
                <button 
                  className="btn btn-create" 
                  onClick={() => setIsDialogOpen(true)}
                >
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}