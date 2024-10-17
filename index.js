const express = require('express');  // import the express dependency
const app = express();             // instantiate an express app, the main worker of this server
const port = 3000;                 // save the port number where your server will be listening


app.use(express.static('public'))


app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname})
  


}); 

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
  
});