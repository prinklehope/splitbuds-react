import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Sidebar from '@/components/Sidebar';

const Icons = {
  DollarSign: () => <span className="icon">💲</span>,
  Home: () => <span className="icon">🏠</span>,
  Users: () => <span className="icon">👥</span>,
  CreditCard: () => <span className="icon">💳</span>,
  BarChart3: () => <span className="icon">📊</span>,
  PieChart: () => <span className="icon">🥧</span>,
  Settings: () => <span className="icon">⚙️</span>,
  LogOut: () => <span className="icon">🚪</span>,
  Menu: () => <span className="icon">☰</span>,
  Plus: () => <span className="icon">+</span>,
  X: () => <span className="icon">✕</span>
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy data (same as original)npm run
  const recentTransactions = [
    {
      id: 1,
      name: "Dinner at Italian Restaurant",
      amount: 120.5,
      date: "Today",
      group: "Friends Night Out",
      participants: 4,
    },
    { id: 2, name: "Grocery Shopping", amount: 85.75, date: "Yesterday", group: "Roommates", participants: 3 },
    { id: 3, name: "Movie Tickets", amount: 45.0, date: "2 days ago", group: "Weekend Trip", participants: 5 },
    { id: 4, name: "Utility Bills", amount: 130.25, date: "3 days ago", group: "Roommates", participants: 3 },
    { id: 5, name: "Gas for Road Trip", amount: 60.0, date: "5 days ago", group: "Weekend Trip", participants: 4 },
  ];

  const groups = [
    { id: 1, name: "Roommates", members: 3, totalExpenses: 450.75, owedToYou: 150.25, youOwe: 0 },
    { id: 2, name: "Weekend Trip", members: 5, totalExpenses: 1250.5, owedToYou: 0, youOwe: 85.5 },
    { id: 3, name: "Friends Night Out", members: 4, totalExpenses: 320.0, owedToYou: 80.0, youOwe: 0 },
    { id: 4, name: "Office Lunch", members: 6, totalExpenses: 180.0, owedToYou: 0, youOwe: 30.0 },
  ];

  const monthlyBudget = {
    total: 2000,
    spent: 1250,
    remaining: 750,
    categories: [
      { name: "Food & Dining", amount: 450, percentage: 36 },
      { name: "Rent", amount: 600, percentage: 48 },
      { name: "Entertainment", amount: 120, percentage: 9.6 },
      { name: "Transportation", amount: 80, percentage: 6.4 },
    ],
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
            >
              <Icons.Menu />
            </button>
          )}
          <h1>Dashboard</h1>
          <button className="new-expense-btn">
            <Icons.Plus />
            New Expense
          </button>
        </header>

        <main className="dashboard-main">
          <div className="overview-cards">
            <div className="card">
              <div className="card-header">
                <h3>Total Balance</h3>
                <Icons.DollarSign />
              </div>
              <div className="card-content">
                <div className="big-number">$1,234.56</div>
                <p className="sub-text">+20.1% from last month</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>You Owe</h3>
                <Icons.CreditCard />
              </div>
              <div className="card-content">
                <div className="big-number negative">$115.50</div>
                <p className="sub-text">Across 2 groups</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Owed to You</h3>
                <Icons.Users />
              </div>
              <div className="card-content">
                <div className="big-number positive">$230.25</div>
                <p className="sub-text">Across 2 groups</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Active Groups</h3>
                <Icons.Users />
              </div>
              <div className="card-content">
                <div className="big-number">4</div>
                <p className="sub-text">12 total members</p>
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === 'groups' ? 'active' : ''}`}
                onClick={() => setActiveTab('groups')}
              >
                Groups
              </button>
              <button 
                className={`tab-btn ${activeTab === 'budget' ? 'active' : ''}`}
                onClick={() => setActiveTab('budget')}
              >
                Budget
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="tab-content">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Transactions</h3>
                    <p>Your latest expenses across all groups</p>
                  </div>
                  <div className="card-content">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="transaction-item">
                        <div className="transaction-details">
                          <p className="transaction-name">{transaction.name}</p>
                          <p className="transaction-meta">
                            {transaction.group} • {transaction.participants} people • {transaction.date}
                          </p>
                        </div>
                        <div className="transaction-amount">${transaction.amount.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="tab-content groups-content">
                {groups.map((group) => (
                  <div key={group.id} className="card group-card">
                    <div className="card-header">
                      <h3>{group.name}</h3>
                      <p>{group.members} members</p>
                    </div>
                    <div className="card-content">
                      <div className="group-info">
                        <span>Total Expenses:</span>
                        <span>${group.totalExpenses.toFixed(2)}</span>
                      </div>
                      {group.owedToYou > 0 && (
                        <div className="group-info positive">
                          <span>Owed to you:</span>
                          <span>${group.owedToYou.toFixed(2)}</span>
                        </div>
                      )}
                      {group.youOwe > 0 && (
                        <div className="group-info negative">
                          <span>You owe:</span>
                          <span>${group.youOwe.toFixed(2)}</span>
                        </div>
                      )}
                      <button className="group-details-btn">View Details</button>
                    </div>
                  </div>
                ))}
                <div className="card new-group-card">
                  <div className="new-group-content">
                    <div className="new-group-icon">
                      <Icons.Plus />
                    </div>
                    <h3>Create New Group</h3>
                    <p>Start splitting expenses with friends or colleagues</p>
                    <button>Create Group</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'budget' && (
              <div className="tab-content budget-content">
                <div className="card">
                  <div className="card-header">
                    <h3>Monthly Budget</h3>
                    <p>Your spending for the current month</p>
                  </div>
                  <div className="card-content">
                    <div className="budget-summary">
                      <div className="budget-totals">
                        <span>Total Budget</span>
                        <span>${monthlyBudget.total.toFixed(2)}</span>
                      </div>
                      <div className="budget-progress">
                        <div 
                          className="progress-bar" 
                          style={{width: `${(monthlyBudget.spent / monthlyBudget.total) * 100}%`}}
                        ></div>
                      </div>
                      <div className="budget-details">
                        <span>Spent: ${monthlyBudget.spent.toFixed(2)}</span>
                        <span>Remaining: ${monthlyBudget.remaining.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="budget-categories">
                      <h4>Spending by Category</h4>
                      {monthlyBudget.categories.map((category, index) => (
                        <div key={index} className="category-item">
                          <div className="category-header">
                            <span>{category.name}</span>
                            <span>${category.amount.toFixed(2)}</span>
                          </div>
                          <div className="category-progress">
                            <div 
                              className="progress-bar" 
                              style={{width: `${category.percentage}%`}}
                            ></div>
                          </div>
                          <div className="category-percentage">
                            {category.percentage}% of total spent
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}