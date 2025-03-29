import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {
  Plus,
  Search,
  Filter,
  Menu,
  X
} from 'lucide-react';
import '../styles/Expenses.css';

export default function ExpensesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    group: "",
    paidBy: "you",
    splitType: "equal",
  });
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

  // Dummy data for expenses
  const expenses = [
    {
      id: 1,
      description: "Dinner at Italian Restaurant",
      amount: 120.50,
      date: "2023-04-20",
      group: "Friends Night Out",
      category: "Food & Dining",
      participants: [
        { id: 1, name: "You", amount: 30.13, settled: true },
        { id: 2, name: "Jane", amount: 30.13, settled: true },
        { id: 3, name: "Mike", amount: 30.12, settled: false },
        { id: 4, name: "Sarah", amount: 30.12, settled: false }
      ]
    },
    {
      id: 2,
      description: "Grocery Shopping",
      amount: 85.75,
      date: "2023-04-18",
      group: "Roommates",
      category: "Groceries",
      participants: [
        { id: 1, name: "You", amount: 28.58, settled: true },
        { id: 2, name: "Alex", amount: 28.58, settled: true },
        { id: 3, name: "Lisa", amount: 28.59, settled: false }
      ]
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 45.00,
      date: "2023-04-15",
      group: "Weekend Trip",
      category: "Entertainment",
      participants: [
        { id: 1, name: "You", amount: 9.00, settled: true },
        { id: 2, name: "Tom", amount: 9.00, settled: true },
        { id: 3, name: "Emily", amount: 9.00, settled: false },
        { id: 4, name: "David", amount: 9.00, settled: false },
        { id: 5, name: "Jessica", amount: 9.00, settled: false }
      ]
    }
  ];

  // Dummy data for groups
  const groups = [
    { id: 1, name: "Roommates" },
    { id: 2, name: "Weekend Trip" },
    { id: 3, name: "Friends Night Out" },
    { id: 4, name: "Office Lunch" },
  ];

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleCreateExpense = () => {
    console.log("Creating expense:", newExpense);
    setNewExpense({
      description: "",
      amount: "",
      group: "",
      paidBy: "you",
      splitType: "equal",
    });
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setNewExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              <Menu size={24} />
            </button>
          )}
          <h1>Expenses</h1>
          <button 
            className="new-expense-btn" 
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus size={18} />
            <span>Add Expense</span>
          </button>
        </header>

        {isDialogOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>Add New Expense</h2>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setIsDialogOpen(false)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="modal-body">
                <p>Enter the details of your expense to split it with your group.</p>
                
                <div className="form-group">
                  <label htmlFor="expense-description">Description</label>
                  <input
                    id="expense-description"
                    name="description"
                    placeholder="e.g., Dinner, Movie tickets"
                    value={newExpense.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="expense-amount">Amount</label>
                  <input
                    id="expense-amount"
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    value={newExpense.amount}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="expense-group">Group</label>
                  <select 
                    id="expense-group"
                    value={newExpense.group}
                    onChange={(e) => handleSelectChange("group", e.target.value)}
                  >
                    <option value="">Select a group</option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.name}>
                        {group.name}
                      </option>
                    ))}
                  </select>
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
                  onClick={handleCreateExpense}
                >
                  Add Expense
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
              placeholder="Search expenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="filter-btn">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>

          <div className="tabs">
            <div className="tab-buttons">
              <button className="tab-btn active">All Expenses</button>
              <button className="tab-btn">You Paid</button>
              <button className="tab-btn">You Owe</button>
            </div>

            <div className="tab-content">
              <div className="expense-list">
                {filteredExpenses.map((expense) => (
                  <div key={expense.id} className="expense-card card">
                    <div className="expense-header">
                      <h3>{expense.description}</h3>
                      <div className="expense-amount">${expense.amount.toFixed(2)}</div>
                    </div>
                    <div className="expense-details">
                      <span>{expense.group}</span>
                      <span>•</span>
                      <span>{new Date(expense.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{expense.category}</span>
                    </div>
                    <div className="expense-participants">
                      {expense.participants.map((participant) => (
                        <div 
                          key={participant.id} 
                          className={`participant ${participant.settled ? 'settled' : 'unsettled'}`}
                        >
                          {participant.name}: ${participant.amount.toFixed(2)}{" "}
                          {participant.settled ? "(Settled)" : ""}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}