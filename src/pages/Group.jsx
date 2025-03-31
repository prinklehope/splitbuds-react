import Sidebar from "../components/Sidebar";
import "../styles/Group.css";

function Group() {
  const groups = [
    {
      id: 1,
      name: "Roommates",
      description: "Shared apartment expenses",
      lengths: 4,
      totalExpenses: 1250.75,
      owedToYou: 420.25,
      youOwe: 0,
    },
    {
      id: 2,
      name: "Weekend Trip",
      description: "Beach vacation expenses",
      lengths: 5,
      totalExpenses: 2450.5,
      owedToYou: 0,
      youOwe: 185.5,
    },
    {
      id: 3,
      name: "Friends Night Out",
      description: "Dinner and entertainment",
      lengths: 3,
      totalExpenses: 320.0,
      owedToYou: 80.0,
      youOwe: 0,
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar currentPath="/dashboard/groups" />

      <div className="main-content">
        <header className="main-header">
          <h1>My Groups</h1>
        </header>

        <main className="dashboard-main">
          <div className="groups-grid">
            {groups.map((group) => (
              <div key={group.id} className="group-card card">
                <div className="group-header">
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="group-members">
                  <span className="members-count">{group.lengths} Members</span>
                </div>

                <div className="group-financials">
                  <div className="financial-row">
                    <span>Total Expenses:</span>
                    <span>&#8377;{group.totalExpenses}</span>
                  </div>

                  <div className="financial-row-owed">
                    <span>Owed to you:</span>
                    <span>&#8377;{group.owedToYou}</span>
                  </div>

                  <div className="financial-row-owe">
                    <span>You owe:</span>
                    <span>&#8377;{group.youOwe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Group;
