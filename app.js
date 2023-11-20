
const express = require('express');
const { get } = require('http');
const app = express()
const port = process.env.PORT || 3000;

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root123",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "veterinaria-sitio-web",
};  

//motor de plantillas

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))



app.get('/',(req,res)=>{
    res.render("index",{titulo : "Mi titulo dinamico"})
})

app.get('/servicios', (req,res)=>{
    res.render("servicios",{tituloServicios : "Este es un mensaje dinamico de Servicios"})
})

app.use((get,res, next)=>{
    res.status(404).render("404")
})


app.listen(port,()=>{
    console.log('Servidor escuchando')
})