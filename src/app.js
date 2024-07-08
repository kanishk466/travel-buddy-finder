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

app.use("/api/v1/users",authRoute);


export {app};