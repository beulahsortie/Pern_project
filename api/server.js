
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/", function(req, res) {
  res.send("It's working!")
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

app.get("/first", function(req, res) {
    res.send({"name": "Jane"}) // Should be json format
  })
  