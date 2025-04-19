import { Socket } from "socket.io";

export const authSocketHandler = (socket: Socket) => {
    socket.on('userLoggedIn', data => {
        console.log("User logged in");
    })
}