# Module dependencies

compile = (str, path) ->
  stylus(str).set("filename", path).use nib()

http = require("http")
express = require("express")
stylus = require("stylus")
nib = require("nib")

app = express()

app.set "port", process.env.PORT || 8080
app.set "views", __dirname + "/views"
app.set "view engine", "jade"

app.use express.logger("dev")

app.use stylus.middleware(
  src: __dirname + "/public"
  compile: compile
)
app.use express.static(__dirname + "/public")
app.get "/", (req, res) ->
  res.render "index",
    title: "2metres - The Graphic Design of Andrew Carr"

http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
