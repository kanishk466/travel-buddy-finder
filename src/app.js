import express from "express"

import cors from "cors"

import cookieParser from "cookie-parser"

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


import authRoute from "./routes/auth.route.js"
import destinationRoutes from './routes/destination.route.js';
import matchRoutes from './routes/match.route.js';
import messageRoutes from './routes/message.route.js';
import profileRoutes from "./routes/profile.route.js"


app.use("/api/users",authRoute);
app.use('/api/destinations', destinationRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/profile', profileRoutes)


export {app};
