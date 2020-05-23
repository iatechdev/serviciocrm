//app nodejs Repuestos --
import express, {
  json
} from 'express';
import morgan from 'morgan'; //middleware de registrador de solicitudes HTTP
import cors from 'cors'; //cabeceras

import userRoutes from './src/routes/user.routes';

const app = require('express')();

var server = require('http').createServer(app);;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/users', userRoutes);


server.listen(3000, function () {
  console.log('listening on *:3000');
});
