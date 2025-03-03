import express from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { createServer } from 'http';
import connectDB from './config/db.js';
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST'],
        credentials: true,
    }
});

app.use(cors(
    {
        origin: "http://localhost:5173/",
        methods: ['GET', 'POST'],
        credentials: true,
    }
));

app.get('/', (req, res) => {
    res.status(200).send("Connected to server");
})

io.on("connection", (socket) => {
    console.log(`${socket.id} connected to the server`);
});

connectDB();
httpServer.listen(port, () => {
    console.log("The app is listening on the port", port);
});