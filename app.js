const express = require('express');
const app = express(); // la libreria hay que volver a requerir
const path = require('path'); 

const port = 3000

app.use(express.static('public')); // le estamos 

app.listen(port, () => console.log("Servidor escuchando en el puerto" , port)); //levanto servidor web

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views", 'index.html'));
})

app.get("/babbage", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'babbage.html');
    res.sendFile(pathHTML)
})

app.get("/berners-lee", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'berners-lee.html');
    res.sendFile(pathHTML)
})

app.get("/clarke", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'clarke.html');
    res.sendFile(pathHTML)
})

app.get("/hamilton", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'hamilton.html');
    res.sendFile(pathHTML)
})

app.get("/hopper", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'hopper.html');
    res.sendFile(pathHTML)
})

app.get("/lovelace", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'lovelace.html');
    res.sendFile(pathHTML)
})

app.get("/turing", (req, res) => {
    let pathHTML = path.join(__dirname, "/views", 'turing.html');
    res.sendFile(pathHTML)
})
