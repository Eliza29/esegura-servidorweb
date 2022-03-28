const Contenedor = require('./Contenedor.js');

const Contenedor1 = new Contenedor('./productos.txt')
Contenedor1.save({
    "title": "nuevo producto",
    "price": 50,
    "thumbnail": "https://realplaza.vtexassets.com/arquivos/ids/19829632-800-auto?v=637784438719930000&width=800&height=auto&aspect=true",
  }).then(console.log)

// Contenedor1.getById(3).then(console.log)

// Contenedor1.getAll().then(console.log)
// Contenedor1.deleteById(3).then(console.log)
// Contenedor1.deleteAll().then(console.log)