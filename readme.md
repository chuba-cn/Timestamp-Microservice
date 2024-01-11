# Project Documentation: Timestamp Microservice

## Overview

The Timestamp Microservice is a simple API that provides timestamp information in both Unix and UTC formats. It allows users to retrieve the current timestamp or convert a provided date string to timestamp formats. This documentation outlines the usage and endpoints of the Timestamp Microservice.

## Prerequisites

Before running the application, ensure that you have Node.js and npm installed on your machine.

## API Base URL

The Timestamp Microservice is hosted at [https://timestamp-microservice-2m2a.onrender.com](https://timestamp-microservice-2m2a.onrender.com).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/chuba-cn/timestamp-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd timestamp-microservice
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### Starting the Server

To start the server, run the following command:

```bash
npm start
```

The server will be running at <http://localhost:3000> by default.

## Endpoints

1. **Home**
   - **Endpoint:** `/`
   - **Description:** Renders the home page.

2. **Timestamp API**
   - **Endpoint:** `/api`
   - **Description:** Returns the current Unix and UTC timestamps.

3. **Custom Timestamp API**
   - **Endpoint:** `/api/:date`
   - **Description:** Returns Unix and UTC timestamps based on the provided date parameter.
     - If the parameter consists of only numbers, it is treated as a Unix timestamp.
     - If the parameter is a date string, it is parsed, and the corresponding timestamps are returned.

## Error Handling

The server handles unexpected errors by returning a JSON object with an error message.

## Dependencies

- **Express:** Web application framework for Node.js.
- **CORS:** Middleware to enable Cross-Origin Resource Sharing.
- **EJS:** Templating engine for rendering dynamic content.

## Configuration

- **PORT:** The server listens on the specified port (default is 3000).

## Examples

1. **Current Timestamp:**

   ```bash
   curl http://localhost:3000/api
   ```

    **Response:**
  
    ```json
    {
    "unix": 1641946822890,
    "utc": "Tue, 11 Jan 2022 10:07:02 GMT"
    }

**Custom Timestamp:**

```bash
curl http://localhost:3000/api/1641946822890
```

**Response:**

```json
{
  "unix": 1641946822890,
  "utc": "Tue, 11 Jan 2022 10:07:02 GMT"
}
```

**or**

```bash
curl http://localhost:3000/api/2024-01-11T12:34:56
```

**Response:**

```json
{
  "unix": 1700313296000,
  "utc": "Thu, 11 Jan 2024 12:34:56 GMT"
}
```
