const bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/login", function(req, res){
    console.log("Recibimos respuesta del servidor para logear");
    res.sendFile(__dirname + "/login.html");
});

app.get("/register", function(req, res){
    console.log("Recibimos respuesta del servidor para registrarse");
    res.sendFile(__dirname + "/register.html");
});

app.post("/login", function(req, res){
    var dato = req.body
    console.log("------ INICIO DE SESIÓN ------")
    console.log(dato)
    res.send("Accediste como: " + dato.nombre)
})

app.post("/register", function(req, res){
    console.log("------ REGISTRO ------")
    var dato = req.body
    console.log(dato);
    res.send("Bienvenido " + dato.nombre + " disfruta de la página");
});

app.listen(3000, function(){
    console.log("Estamos escuchando el puerto 3000");
});