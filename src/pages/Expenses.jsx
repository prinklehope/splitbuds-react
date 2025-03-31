import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Expenses.css";

export default function ExpensesPage() {
  const expenses = [
    {
      id: 1,
      description: "Dinner at Italian Restaurant",
      amount: 120.5,
      date: "2023-04-20",
      group: "Friends Night Out",
      category: "Food & Dining",
      total: [
        { id: 1, name: "You", amount: 30.13, settled: true },
        { id: 2, name: "Jane", amount: 30.13, settled: true },
        { id: 3, name: "Mike", amount: 30.12, settled: false },
        { id: 4, name: "Sarah", amount: 30.12, settled: false },
      ],
    },
    {
      id: 2,
      description: "Grocery Shopping",
      amount: 85.75,
      date: "2023-04-18",
      group: "Roommates",
      category: "Groceries",
      total: [
        { id: 1, name: "You", amount: 28.58, settled: true },
        { id: 2, name: "Alex", amount: 28.58, settled: true },
        { id: 3, name: "Lisa", amount: 28.59, settled: false },
      ],
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 45.0,
      date: "2023-04-15",
      group: "Weekend Trip",
      category: "Entertainment",
      total: [
        { id: 1, name: "You", amount: 9.0, settled: true },
        { id: 2, name: "Tom", amount: 9.0, settled: true },
        { id: 3, name: "Emily", amount: 9.0, settled: false },
        { id: 4, name: "David", amount: 9.0, settled: false },
        { id: 5, name: "Jessica", amount: 9.0, settled: false },
      ],
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar currentPath="/dashboard/expenses" />

      <div className="main-content">
        <header className="main-header">
          <h1>Expenses</h1>
        </header>

        <main className="dashboard-main">
          <div className="expense-list">
            {expenses.map((expense) => (
              <div key={expense.id} className="expense-card card">
                <div className="expense-header">
                  <h3>{expense.description}</h3>
                  <div className="expense-amount">&#8377;{expense.amount}</div>
                </div>
                <div className="expense-details">
                  <span>{expense.group}</span>
                  <span>•</span>
                  <span>{expense.date}</span>
                  <span>•</span>
                  <span>{expense.category}</span>
                </div>
                <div className="expense-total">
                  {expense.total.map((participant) => (
                    <div key={participant.id} className="participant">
                      {participant.name}: &#8377;{participant.amount}{" "}
                      {participant.settled ? "(Settled)" : ""}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
