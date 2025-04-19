import { io } from 'socket.io-client';

const socket = io("http://localhost:8080", {
    withCredentials: true,
});

socket.on("connect", () => {
    console.log("Connected to socket server with ID:", socket.id);
    socket.on('userLoggedIn', data => console.log(data.message));
});

export default socket;