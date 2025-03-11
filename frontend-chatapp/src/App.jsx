import React, { useEffect } from 'react';
import './App.css';
import MessagePage from './pages/MessagePage';
import {io} from "socket.io-client";
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
function App() {
    const socket = io('http://localhost:8080');

    useEffect(() => {
        socket.on("connect", () => {
            console.log(`${socket.id} established a connection to the server`);
        })
    },[]);
    return (
        <div className='app-container'>
            < HomePage/>
        </div>
    )
}

export default App;