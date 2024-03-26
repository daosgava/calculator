import { OPERATION_TYPES } from './constants.mjs';
import logger from './logger.mjs';

const { ADD, SUBTRACT, MULTIPLY, DIVIDE } = OPERATION_TYPES;

const mathOperations = {
    [ADD]: (a, b) => a + b,
    [SUBTRACT]: (a, b) => a - b,
    [MULTIPLY]: (a, b) => a * b,
    [DIVIDE]: (a, b) => a / b,
};

class OperationHandler {

    validateInputs = (inputA, inputB, operationType = ADD) => {
        const num1 = parseInt(inputA);
        const num2 = parseInt(inputB);

        if (isNaN(num1)) {
            throw new Error('a is not a number');
        }

        if (isNaN(num2)) {
            throw new Error('b is not a number');
        }

        if (operationType === DIVIDE && num2 === 0) {
            throw new Error('division by zero');
        }

        return [num1, num2];
    }

    addition = (req, res) => {
        try {
            const [num1, num2] = this.validateInputs(req.query.a, req.query.b, ADD);
            const data = mathOperations[ADD](num1, num2);
            logger.info({ text: 'valid operation', data: { num1, num2 }, operation: ADD });
            res.status(200).send({ data });
        } catch (e) {
            logger.error({ text: e.message, operation: ADD });
            res.status(500).send(e.message);
        }
    }

    subtraction = (req, res) => {
        try {
            const [num1, num2] = this.validateInputs(req.query.a, req.query.b, SUBTRACT);
            const data = mathOperations[SUBTRACT](num1, num2);
            logger.info({ text: 'valid operation', data: { num1, num2 }, operation: SUBTRACT });
            res.status(200).send({ data });
        } catch (e) {
            logger.error({ text: e.message, operation: SUBTRACT });
            res.status(500).send(e.message);
        }
    }

    multiplication = (req, res) => {
        try {
            const [num1, num2] = this.validateInputs(req.query.a, req.query.b, MULTIPLY);
            const data = mathOperations[MULTIPLY](num1, num2);
            logger.info({ text: 'valid operation', data: { num1, num2 }, operation: MULTIPLY });
            res.status(200).send({ data });
        } catch (e) {
            logger.error({ text: e.message, operation: MULTIPLY });
            res.status(500).send(e.message);
        }
    }

    division = (req, res) => {
        try {
            const [num1, num2] = this.validateInputs(req.query.a, req.query.b, DIVIDE);
            const data = mathOperations[DIVIDE](num1, num2);
            logger.info({ text: 'valid operation', data: { num1, num2 }, operation: DIVIDE });
            res.status(200).send({ data });
        } catch (e) {
            logger.error({ text: e.message, operation: DIVIDE });
            res.status(500).send(e.message);
        }
    }
}

export default OperationHandler;
