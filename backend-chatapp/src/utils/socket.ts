import { Server, Socket } from "socket.io";
import { authSocketHandler } from "../sockets/authSocket";
import { messageSocketHandler } from "../sockets/messageSocket";
let io: Server;

export const createSocketInstance = ( socketInstance: Server ) => {
    io = socketInstance;
    io.on("connection", (socket: Socket) => {
        console.log(`${socket.id} connected to the server`);
        authSocketHandler(socket);
        messageSocketHandler(socket);
    });
}

export const getSocketInstance = ()=> {
    if(!io) {
        throw new Error("Socket instance is not defined");
    }
    return io;
}