const express = require("express")
const path = require("path")

const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(path.resolve("views/index.html"))
})

http.listen(8080, function () {
    console.log("listening on *:8080")
})

// TMI

const tmi = require("tmi.js")
const dotenv = require("dotenv")

dotenv.config()

const client = new tmi.Client({
    options: { debug: false },
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: process.env.CLIENT,
        password: process.env.PASSWORD,
    },
    channels: ["datsgabs"],
})

client.connect()

client.on("chat", (channel, tags, message, self) => {
    // If it's the bot
    if (self) return
    io.emit("listen", "Hello")
})
