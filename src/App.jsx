import { useState } from 'react'
import './App.css'
import Dashboard from './frontend/Dashboard'
import LoginGateway from './frontend/LoginGateway'
import Mail1 from './frontend/mail1'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'mail'

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('dashboard');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      {isLoggedIn ? (
        currentView === 'mail' ? (
          <Mail1 onLogout={handleLogout} onNavigate={handleNavigate} currentView={currentView} />
        ) : (
          <Dashboard onLogout={handleLogout} onNavigate={handleNavigate} currentView={currentView} />
        )
      ) : (
        <LoginGateway onLogin={handleLogin} />
      )}
    </>
  )
}

export default App