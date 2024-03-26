### Calculator API

#### Overview

This API offers basic arithmetic operations—addition, subtraction, multiplication, and division—through HTTP GET requests. Users can perform calculations by providing two numbers as query parameters, receiving results in JSON format. Simple and accessible, it's designed for any application needing essential math functionalities.

#### Getting Started

1. **Installation**

   Before running the application, ensure you have Node.js installed. Then, clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. **Running the Server**

   To start the server, use the following command:

   ```bash
   npm run dev
   ```

   This command will launch the Express server on port 3010. 

#### API Usage

- **Add Two Numbers**

  - **Endpoint:** `/add`
  - **Method:** `GET`
  - **Query Parameters:**
    - `a`: The first number to add.
    - `b`: The second number to add.
  - **Success Response:** JSON object containing the result of the addition.
  - **Error Response:** If any of the inputs are invalid, an error message is returned.

- **Subtract Two Numbers**

  - **Endpoint:** `/subtract`
  - **Method:** `GET`
  - **Query Parameters:**
    - `a`: The first number from which you subtract.
    - `b`: The second number to be subtracted from the first.
  - **Success Response:** JSON object containing the result of the subtraction.
  - **Error Response:** If any of the inputs are invalid, an error message is returned.

- **Multiply Two Numbers**

  - **Endpoint:** `/multiply`
  - **Method:** `GET`
  - **Query Parameters:**
    - `a`: The first number to multiply.
    - `b`: The second number to multiply with the first.
  - **Success Response:** JSON object containing the result of the multiplication.
  - **Error Response:** If any of the inputs are invalid, an error message is returned.

- **Divide Two Numbers**

  - **Endpoint:** `/divide`
  - **Method:** `GET`
  - **Query Parameters:**
    - `a`: The numerator.
    - `b`: The denominator (must not be zero).
  - **Success Response:** JSON object containing the result of the division.
  - **Error Response:** If any of the inputs are invalid, an error message is returned, especially if `b` is zero.

#### Example

To add two numbers, navigate to the following URL in your browser or use a tool like `curl`:

```
http://localhost:3010/add?a=10&b=5
```

This will return:

```json
{
  "data": 15
}
```

#### Logging

The API uses a simple logger to log information and errors. All logs are output to the console.

- Information logs are created for valid requests.
- Error logs are created for invalid inputs or server errors.

#### Error Handling

The API includes basic error handling. If invalid input is provided, it logs an error and returns a `500` status code with an error message.
