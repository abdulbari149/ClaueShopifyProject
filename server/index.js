const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const webUrl = "../claue/index.html";

const E_commerceServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.listen(hostname)
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(webUrl, (error, data)=>{
      if(error){
          res.statusCode = 404;
          res.write("Error: File not found.")
      }
      else{
          res.write(data)
      }
      res.end();
    })
})

E_commerceServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
