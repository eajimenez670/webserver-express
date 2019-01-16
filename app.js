const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Edison',
            edad: 20,
            apellido: req.apellido
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3000);

console.log('Escuchando el puerto 3000');