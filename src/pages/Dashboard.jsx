import "../styles/Dashboard.css";
import Sidebar from "@/components/Sidebar";
export default function DashboardPage() {
  const recentTransactions = [
    {
      id: 1,
      name: "Dinner at Italian Restaurant",
      amount: 120.5,
      date: "Today",
      group: "Friends Night Out",
      participants: 4,
    },
    {
      id: 2,
      name: "Grocery Shopping",
      amount: 85.75,
      date: "Yesterday",
      group: "Roommates",
      participants: 3,
    },
    {
      id: 3,
      name: "Movie Tickets",
      amount: 45.0,
      date: "2 days ago",
      group: "Weekend Trip",
      participants: 5,
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="desktop-sidebar">
        <Sidebar currentPath="/dashboard" />
      </div>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
        </div>

        <div className="dashboard-content">
          <section className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Balance</h3>
                <p className="stat-value">&#8377;245.50</p>
                <p className="stat-label">You are owed</p>
              </div>
              <div className="stat-card">
                <h3>Monthly Spending</h3>
                <p className="stat-value">&#8377;1,240.80</p>
                <p className="stat-label">This month</p>
              </div>
              <div className="stat-card">
                <h3>Active Groups</h3>
                <p className="stat-value">5</p>
                <p className="stat-label">With 12 friends</p>
              </div>
              <div className="stat-card">
                <h3>Pending Settlements</h3>
                <p className="stat-value">3</p>
                <p className="stat-label">&#8377;78.50 total</p>
              </div>
            </div>

            <div className="recent-transactions">
              <div className="section-header">
                <h2>Recent Transactions</h2>
                <button className="add-button"> Add New</button>
              </div>
              <div className="transactions-list">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="transaction-card">
                    <div className="transaction-info">
                      <h3>{transaction.name}</h3>
                      <p className="transaction-details">
                        <span className="group">{transaction.group}</span>
                        <span className="date">{transaction.date}</span>
                        <span className="participants">
                          {transaction.participants} people
                        </span>
                      </p>
                    </div>
                    <p className="transaction-amount">
                      &#8377;{transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="expense-summary">
              <div className="section-header">
                <h2>Expense Summary</h2>
              </div>
              <div className="summary-chart">
                <div className="chart-placeholder">
                  <p>Expense Distribution Chart</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
