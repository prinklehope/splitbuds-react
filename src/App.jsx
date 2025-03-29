import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import GroupsPage from './pages/Group'
import ExpensesPage from './pages/Expenses'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/groups" element={<GroupsPage />} />
        <Route path="/dashboard/expenses" element={<ExpensesPage />} />
      </Routes>
    </Router>
  );
}

export default App