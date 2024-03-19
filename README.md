### README for Simple Addition API

#### Overview

This is a simple Express.js API that provides an addition functionality. It accepts two numbers as query parameters, adds them, and returns the result. The API is designed to be minimalistic, yet it includes basic logging and error handling.

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
