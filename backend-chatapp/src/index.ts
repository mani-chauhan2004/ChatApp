import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { createServer } from 'http';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

dotenv.config();
const app: Application = express();
app.use(cookieParser());
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
        origin: "http://localhost:5173",
        credentials: true,
    }
));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth/api', authRoutes);


app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Connected to server");
})

io.on("connection", (socket) => {
    console.log(`${socket.id} connected to the server`);
});

connectDB();
httpServer.listen(port, () => {
    console.log("The app is listening on the port", port);
});