import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { getUser } from './api/api.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WebSocketProvider } from './provider/WebSocketProvider.jsx';
import { UserAuthProvider } from './provider/UserAuthProvider.jsx';

import NavbarBS from './components/Navbar.jsx';
import GlobalGameSolo from './game_page/solo/GlobalGameSolo';
import LoginPage from './login_page/loginPage';
import HomePage from './home_page/Home.jsx';
import ChooseGame from './game_page/ChooseGame';
import GlobalGameMulti from './game_page/multi/GlobalGameMulti';
import RegisterPage from './register_page/registerPage';
import GlobalTournaments from './game_page/tournaments/GlobalTournaments';
import { getUser } from './api/api.js';
import './i18n';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WebSocketProvider } from './provider/WebSocketProvider.jsx';

const App = () => {
  const location = useLocation();
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/check42user" element={<Check42User />} />
      </Routes>
      <UserAuthProvider>
      {!["/", "/register", "check42user"].includes(location.pathname) && (
      <WebSocketProvider>
      <NavbarBS/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/ChooseGame" element={<ChooseGame />} />
        <Route path="/GlobalGameSolo" element={<GlobalGameSolo />} />
        <Route path="/GlobalGameMulti/:roomId" element={<GlobalGameMulti />} />
        <Route path="/globalTournaments" element={<GlobalTournaments />} />

      </Routes>
      </WebSocketProvider>
    )}
      </UserAuthProvider>
    </>  
  );
};


export default App;