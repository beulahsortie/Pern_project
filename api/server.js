
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("/api", function(req, res) {
  res.send("It's king!")
})

// app.listen(4050, () => {
//   console.log("app listening on port 4050")
// })

app.get("/api/first", function(req, res) {
    res.send({"name": "Jane"}) // Should be json format
  })

const port = process.env.PORT || 4050;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
  