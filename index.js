const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index");
});
app.get("/error", function (req, res) {
    res.render("error");
});
app.get("/miembros", function (req, res) {
    res.render("miembros");
});
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function () {
    console.log(
        "Server",
        process.pid,
        "listening on port",
        app.get("port"),
        "or 5000"
    );
});
//estoy en VS code
app.get("/login", require("./modules/usuario/login"));
app.post("/login", require("./modules/usuario/login"));

app.get("/sign-up", require("./modules/usuario/sign-up"));
app.post("/sign-up", require("./modules/usuario/sign-up"));


app.get("/carrito", function (req, res) {
    res.render("carritodecompras");
});
