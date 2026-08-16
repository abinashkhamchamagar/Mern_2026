import express from "express";
import fs from "fs/promises";

import config from "./config/config.js"
import usersRoute from "./routes/user.routes.js" //export default xa so userRoute use gareko
import connectDB from "./config/database.js";

const app = express();
connectDB();

app.get("/", (request, response) => {
    response.send("<h1>hello this is my first api with express js</h1>")
})
app.get("/about", (request, response) => {
    response.send("<h1>hello this is my about section</h1>")
})
app.get("/contact", (request, response) => {
    response.send("<h1>hello this is my contact section</h1>")
})


app.use("/", usersRoute)

app.listen(config.port, () => {
    console.log(`server running at port: ${config.port}....`)
});