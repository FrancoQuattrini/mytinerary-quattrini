const express = require("express")
const cors = require("cors")
const passport = require("passport")
require("dotenv").config()
const app = express()
const router = require("./routes/index")
require("./config/database")
require("./config/passport")
const path = require("path")

// Middleware
app.use(cors())
app.use(express.json())

app.use("/api", router)
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"))
   app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"))
   })
}

app.listen(process.env.PORT || 4000, process.env.LOCALHOST || "0.0.0.0", () =>
   console.log("Server running on port 4000")
)
