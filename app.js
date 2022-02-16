var http= require('http');

var server= http.createServer(function(peticion, respuesta){
respuesta.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
respuesta.write('<h3>SERVER BASICO CON NODE</h3>');
console.log('peticion web');
respuesta.end();
});

server.listen(3000);
console.log('Ejecutando servidor local con node');