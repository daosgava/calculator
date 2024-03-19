import logger from './logger.mjs';
import express from 'express';

const app = express();
const port = 3010;

const add = (a, b) => a + b;

app.get('/add', (req, res) => {
    try {
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);

        if (isNaN(a) || isNaN(b)) {
            logger.error('Invalid input');
            throw new Error('Invalid input');
        }
        logger.info('Parameters are valid');
        res.status(200).send({ data: add(a, b) });
    } catch (e) {
        logger.error(e);
        res.status(500).send(e.message);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});