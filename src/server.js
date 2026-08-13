import express from "express";
import fs from "fs/promises";
import dotenv from "dotenv";
import config from "./config/config.js"

const app = express();

app.get("/", (request, response) => {
    response.send("<h1>hello this is my first api with express js</h1>")
})
app.get("/about", (request, response) => {
    response.send("<h1>hello this is my about section</h1>")
})
app.get("/contact", (request, response) => {
    response.send("<h1>hello this is my contact section</h1>")
})
app.get("/users", async (req, res) => {
    const users = await fs.readFile("data/user.json", "utf-8")
    res.json(JSON.parse(users))
})
app.get("/users/:userId", async (req, res) => {
    const id = req.params.userId
    const users = await fs.readFile("data/user.json", "utf-8")
    const user = JSON.parse(users).find((user) => user.id == id);
    
    if (!user) {
        return res.send("User not found.");
    }
    res.json(user)
})

app.listen(config.port, () => {
    console.log(`server running at port: ${config.port}....`)
});