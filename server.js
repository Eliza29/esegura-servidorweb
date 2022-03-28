const express = require('express');
const Contenedor = require('./Contenedor.js');

const app = express();
const Contenedor1 = new Contenedor('./productos.txt');


app.get('/productos', async(req, res) => {
  const getProducts = await Contenedor1.getAll()
  res.json(getProducts);
});

app.get('/productoRandom', async(req, res) => {
  
  const getProducts = await Contenedor1.getAll()
  let numberRandom = Math.floor(Math.random() * getProducts.length) + 1;
  const getRandomProduct = await Contenedor1.getById(numberRandom)
  res.json(getRandomProduct);
});


const server = app.listen(8080, () => {
  console.log('servidor http en el puerto 8080');
});
server.on('error', error => console.log(`Error en el servidor ${error}`));