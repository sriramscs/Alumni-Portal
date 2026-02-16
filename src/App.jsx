import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginGateway from './frontend/Auth/LoginGateway.jsx';
import Dashboard from './frontend/Alumini/DashBoard/Dashboard.jsx'
import Mail from './frontend/Alumini/DashBoard/Mail/Mail.jsx';
import ViewMail from './frontend/Alumini/DashBoard/Mail/ViewMail.jsx';
import EventsReunion from './frontend/Alumini/DashBoard/Event&Reunion/Event_Reunion.jsx';
import View_Invitation from './frontend/Alumini/DashBoard/Event&Reunion/View_Invitaion.jsx';
import Donation_History from './frontend/Alumini/DashBoard/Donation/Donation_History.jsx';
import DonationFormPage from './frontend/Alumini/DashBoard/Donation/Donation_Form.jsx';
import JobReference_History from './frontend/Alumini/DashBoard/Job&Reference/JobReference_History.jsx';
import JobReference_Form from './frontend/Alumini/DashBoard/Job&Reference/JobReference_Form.jsx';
import MailForm from './frontend/Alumini/DashBoard/Mail/Mail_Form.jsx';
import Profile from './frontend/Alumini/DashBoard/Profile/Profile.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/alumini/dashboard" : "/login"} />} />
        
        <Route path="/login" element={isLoggedIn ? <Navigate to="/alumini/dashboard" /> : <LoginGateway onLogin={handleLogin} />} />
        <Route
          path="/alumini/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/mail"
          element={isLoggedIn ? <Mail onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/mail/viewmail"
          element={isLoggedIn ? <ViewMail onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/mail/viewmail/acceptmail"
          element={isLoggedIn ? <MailForm onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/event_reunion"
          element={isLoggedIn ? <EventsReunion onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/event_reunion/view_invitation"
          element={isLoggedIn ? <View_Invitation onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/donation_history"
          element={isLoggedIn ? <Donation_History onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/donation_history/donation_form"
          element={isLoggedIn ? <DonationFormPage onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/JobReference_History"
          element={isLoggedIn ? <JobReference_History onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/JobReference_History/JobReference_Form"
          element={isLoggedIn ? <JobReference_Form onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/alumini/profile"
          element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  )
}

export default App