const express = require("express")
const cors = require("cors")
const passport = require("passport")
require("dotenv").config()
const app = express()
const router = require("./routes/index")
require("./config/database")
require("./config/passport")

// Middleware
app.use(cors())
app.use(express.json())

app.use("/api", router)

app.listen(4000, () => console.log("Server running on port 4000"))
