# Weird World API 🌍

A lightweight REST API built with **Node.js** using the native `http`
module. The API serves a collection of unusual and interesting
destinations from a local JavaScript data file and supports filtering by
country, continent, and public-access status.

## Features

-   Built with Node.js and ES Modules
-   Uses Node's native `http` module --- no Express required
-   Returns JSON responses
-   Filter destinations with query parameters
-   Get destinations by continent
-   Uses a local in-memory dataset
-   Simple project structure suitable for learning backend fundamentals

## Tech Stack

-   **Node.js**
-   **JavaScript (ES Modules)**
-   **Node.js `http` module**
-   Local JavaScript data source

## Project Structure

``` text
weird-world-api/
├── src/
│   ├── data.js
│   ├── db.js
│   ├── filterdestination.js
│   ├── querry.js
│   ├── returnresponse.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

### File Overview

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `src/server.js`                     Creates the HTTP server and defines
                                      API routes

  `src/data.js`                       Contains the destination dataset

  `src/db.js`                         Provides the data through
                                      `getDataFromDB()`

  `src/filterdestination.js`          Handles filtering by query
                                      parameters

  `src/returnresponse.js`             Sends JSON responses with HTTP
                                      status codes

  `src/querry.js`                     Small query-string parsing
                                      experiment

  `package.json`                      Project metadata and npm scripts
  -----------------------------------------------------------------------

## Getting Started

### 1. Clone the repository

``` bash
git clone <your-repository-url>
cd weird-world-api
```

### 2. Install dependencies

The project currently has no external runtime dependencies, but running
the standard install command is fine:

``` bash
npm install
```

### 3. Start the server

``` bash
npm start
```

The server listens on:

``` text
http://localhost:8000
```

You should see:

``` text
connected to port 8000
```

## API Endpoints

### Get all destinations

``` http
GET /api
```

Example:

``` text
http://localhost:8000/api
```

Returns the complete destination dataset.

### Filter by country

``` http
GET /api?country=USA
```

Example:

``` text
http://localhost:8000/api?country=New%20Zealand
```

Country matching is case-insensitive.

### Filter by continent

``` http
GET /api?continent=Asia
```

Example:

``` text
http://localhost:8000/api?continent=Europe
```

Continent matching is case-insensitive.

### Filter by public access

``` http
GET /api?is_open_to_public=true
```

or:

``` text
http://localhost:8000/api?is_open_to_public=false
```

The value is interpreted as a boolean.

### Combine filters

Multiple query parameters can be used together:

``` http
GET /api?continent=Asia&is_open_to_public=true
```

For example:

``` text
http://localhost:8000/api?country=USA&continent=North%20America&is_open_to_public=false
```

All supplied filters must match for a destination to be returned.

### Get destinations by continent

There is also a dedicated continent route:

``` http
GET /api/continent/:continent
```

Examples:

``` text
http://localhost:8000/api/continent/Asia
```

``` text
http://localhost:8000/api/continent/Europe
```

The continent comparison is case-insensitive.

## Response Format

Successful requests return JSON.

A destination has a structure similar to:

``` json
{
  "name": "Waitomo Glowworm Caves",
  "location": "Waitomo",
  "country": "New Zealand",
  "continent": "Oceania",
  "is_open_to_public": true,
  "uuid": "550e8400-e29b-41d4-a716-446655440001",
  "details": [
    {
      "fun_fact": "The glowworms create a star-like effect on the cave ceiling using bioluminescence."
    },
    {
      "description": "A subterranean network of limestone caverns famous for its magical boat rides under twinkling glowworm-lit ceilings."
    }
  ]
}
```

## Error Handling

If a route does not exist, the API returns HTTP `404` with JSON:

``` json
{
  "error": "not found",
  "message": "The requested route does not exist"
}
```

## How Filtering Works

The main `/api` endpoint reads URL query parameters using JavaScript's
`URL` and `URLSearchParams` APIs.

Supported parameters:

  Parameter             Type             Example
  --------------------- ---------------- --------------------------
  `country`             string           `country=USA`
  `continent`           string           `continent=Asia`
  `is_open_to_public`   boolean string   `is_open_to_public=true`

The filtering logic is implemented in:

``` text
src/filterdestination.js
```

If no supported filter is supplied, all destinations are returned.

## Data Source

The project currently uses a local JavaScript array in:

``` text
src/data.js
```

`src/db.js` exposes that data through:

``` js
export async function getDataFromDB() {
  return data;
}
```

Despite the function name, there is currently **no external database
connection**. The data is stored in memory when the application runs.

## Development Notes

This project is intentionally simple and is useful for learning:

-   HTTP servers
-   HTTP methods
-   URL routing
-   Query parameters
-   JSON APIs
-   ES module imports/exports
-   Array filtering
-   Separation of backend logic into modules
-   HTTP status codes and response headers

## Possible Improvements

Future versions could add:

-   A real database such as PostgreSQL or MongoDB
-   Individual destination lookup by UUID
-   `POST`, `PUT`, and `DELETE` endpoints
-   Input validation
-   Better error handling
-   Environment variables for configuration
-   Automated tests
-   Request logging
-   CORS support
-   Express or another web framework
-   API documentation with OpenAPI/Swagger
-   Pagination and sorting

## License

This project currently uses the **ISC** license as specified in
`package.json`.

------------------------------------------------------------------------

Made by **Aryan**.
