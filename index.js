// Ignore... Simple server for development.
const express = require('express')
const app = express()
const port = 3000
app.use('/lamegram/', express.static('.'))
app.get("*", (req, res) => res.sendFile(__dirname + "/index.html"))
app.listen(port, () => console.log("Server started"))
