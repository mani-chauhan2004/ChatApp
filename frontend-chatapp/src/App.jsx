import React, { useEffect } from 'react';
import './App.css';
import MessagePage from './pages/MessagePage';
import socket from './utils/socket';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
function App() {
    return (
        <div className='app-container'>
            < HomePage/>
        </div>
    )
}

export default App;