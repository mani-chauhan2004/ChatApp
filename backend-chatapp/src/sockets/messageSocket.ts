import { Socket } from "socket.io"
export const messageSocketHandler = (socket: Socket) => {
    socket.on('messageSent', (data) => {
        console.log(data.message);
    });
}