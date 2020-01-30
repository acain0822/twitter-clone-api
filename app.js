const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

//when i make a request to '/', I'll get a hello world response
app.get('/', (req, res) => res.send('Hello World!'));

//5k is the port number
//create a listener on a port number
app.listen(port, () => console.log("The Server Started!"));

