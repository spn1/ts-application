import { Request, Response } from 'express';
const express = require('express');
const path = require('path');

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, '../dist')))

//get this to return index or sm
server.get('/', (req: Request, res: Response) => {
  console.log('hello')
  res.sendFile(path.resolve('./dist/index.html'));
});

server.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});