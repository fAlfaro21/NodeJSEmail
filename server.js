
const EmailCtrl = require('/Users/jobbe/Documents/The Bridge/Proyecto/diaNEjercicioNodeJsEmail/eMail');
//email route
router.post('/email', EmailCtrl.sendEmail);


//Para montar un servidor 

//1. hay que saber que va a ir por http local

const http = require("http");
const host = "localhost";
const port = 8080;

//2. 

const server = http.createServer((request, response) =>{

// aquí va la lógica de negocio: hacer peticiones o gestionar respuestas

console.log("Petición recibida.");

//escribe en la cabecera. El 200 es un código que significa que todo va bien:
            response.writeHead(200,{"Content-Type": "text/html"}); 
//escribe en el body. Nunca debe faltar(advierte de lo que hay dentro). Dependiendo de su contenido el que lo recibe lo va a tratar de una forma u otra. Lleva el tipo mime unviersal (text/html).
            response.write("Hola Mundo"); 

//----------------------------------- otro ejercicio
// const headers = {
//     'Content-Type': "text/html"
// };

//let htmlResponse = '';

response.writeHead(200,headers);

//endpoints

//Home

if (request.url === "/"){
    response.write('<h1>Welcome home</h1>');
    response.end();
    }
else
if(request.url === "/hw"){  //aquí el endpoint es hw
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write('<h2>Happy Halloween</h2>');
    response.end();
    }
else    //HTML file
if(request.url === "/file"){  
    fs.readfile ('front/fichero.html',(error, data) =>{
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write(data); 
        response.end();
    });
    
}

else    //CSS file
if(request.url === "/css"){  
    fs.readfile ('front/css/style.css',(error, data) =>{
        response.writeHead(200,{"Content-Type": "text/css"});
        response.write(data); 
        response.end();
    });
    
}

else    //JSON file
if(request.url === "/jsondata"){  
    fs.readfile ('front/css/style.css',(error, data) =>{
        response.writeHead(200,{"Content-Type": "application/json"});
        response.write(JSON.stringify({nombre: "XX"})); 
        response.end();
    });
    
}

else{
    //404
    response.writeHead(404,{"Content-Type": "text/plain"});
        response.write("No hay de eso"); 
        response.end();
}

//envía el paquete. Hasta que no haya un end, no se envía.


});
//aquí arranco el servidor
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});