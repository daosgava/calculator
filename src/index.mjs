import express from 'express';
import OperationHandler from './operations.mjs';
import { port } from './constants.mjs';

const app = express(); 
const operationHandler = new OperationHandler();

// Routes
app.get('/', (_, res) => {
    res.status(200).send('Calculator API');
});

app.get('/add', operationHandler.addition);

app.get('/subtract', operationHandler.subtraction);

app.get('/multiply', operationHandler.multiplication);

app.get('/divide', operationHandler.division);

app.listen(port, () => {
  console.log(`🐲: This server at http://localhost:${port}, `);
});