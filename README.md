# Todo API

A simple RESTful API for managing todos built with Node.js, Express, and TypeScript using clean OOP architecture.

## Architecture

- **Controller**: Handles HTTP requests and responses
- **Service**: Contains business logic and validations
- **Repository**: Manages data storage (in-memory)

## Setup

```bash
# Install dependencies
npm install

# Build project
npm run build

# Run development server
npm run dev

# Run production server
npm start
```

Server runs on: `http://localhost:8080`

## API Endpoints

### Base URL
```
http://localhost:8080/api/todos
```

### 1. Create Todo
**POST** `/api/todos`

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread",
  "completed": false
}
```

**Required Fields:**
- `title` (string) - Title of the todo
- `description` (string) - Detailed description

**Optional Fields:**
- `completed` (boolean) - Default: false

**Response:** `201 Created`
```json
{
  "id": "1",
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread",
  "completed": false,
  "createdAt": "2026-02-01T15:30:00.000Z",
  "updatedAt": "2026-02-01T15:30:00.000Z"
}
```

---

### 2. Get All Todos
**GET** `/api/todos`

**Response:** `200 OK`
```json
[
  {
    "id": "1",
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread",
    "completed": false,
    "createdAt": "2026-02-01T15:30:00.000Z",
    "updatedAt": "2026-02-01T15:30:00.000Z"
  },
  {
    "id": "2",
    "title": "Complete project",
    "description": "Finish the Todo API implementation",
    "completed": true,
    "createdAt": "2026-02-01T16:00:00.000Z",
    "updatedAt": "2026-02-01T16:30:00.000Z"
  }
]
```

---

### 3. Get Todo by ID
**GET** `/api/todos/:id`

**Parameters:**
- `id` (string) - Todo ID

**Response:** `200 OK`
```json
{
  "id": "1",
  "title": "Buy groceries",
  "description": "Get milk, eggs, and bread",
  "completed": false,
  "createdAt": "2026-02-01T15:30:00.000Z",
  "updatedAt": "2026-02-01T15:30:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Todo not found"
}
```

---

### 4. Update Todo
**PUT** `/api/todos/:id`

**Parameters:**
- `id` (string) - Todo ID

**Request Body:** (all fields optional)
```json
{
  "title": "Buy groceries and snacks",
  "description": "Get milk, eggs, bread, and chips",
  "completed": true
}
```

**Response:** `200 OK`
```json
{
  "id": "1",
  "title": "Buy groceries and snacks",
  "description": "Get milk, eggs, bread, and chips",
  "completed": true,
  "createdAt": "2026-02-01T15:30:00.000Z",
  "updatedAt": "2026-02-01T16:45:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Todo not found"
}
```

---

### 5. Delete Todo
**DELETE** `/api/todos/:id`

**Parameters:**
- `id` (string) - Todo ID

**Response:** `200 OK`
```json
{
  "message": "Todo deleted successfully"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Todo not found"
}
```

---

## Data Model

### Todo Object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Auto-generated | Unique identifier |
| title | string | Yes | Title of the todo |
| description | string | Yes | Detailed description |
| completed | boolean | No (default: false) | Completion status |
| createdAt | Date | Auto-generated | Creation timestamp |
| updatedAt | Date | Auto-generated | Last update timestamp |

---

## Example Usage with cURL

### Create a todo
```bash
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn TypeScript","description":"Complete TypeScript tutorial"}'
```

### Get all todos
```bash
curl http://localhost:8080/api/todos
```

### Get specific todo
```bash
curl http://localhost:8080/api/todos/1
```

### Update a todo
```bash
curl -X PUT http://localhost:8080/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

### Delete a todo
```bash
curl -X DELETE http://localhost:8080/api/todos/1
```

---

## Error Responses

### 400 Bad Request
When required fields are missing:
```json
{
  "error": "Title and description are required"
}
```

### 404 Not Found
When todo doesn't exist:
```json
{
  "error": "Todo not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

---

## Project Structure

```
src/
├── app.ts                    # Express app setup
├── server.ts                 # Server entry point
├── models/
│   └── todo.model.ts        # Todo interface
├── repositories/
│   └── todo.repository.ts   # Data storage layer
├── services/
│   └── todo.service.ts      # Business logic
├── controllers/
│   └── todo.controller.ts   # Request handlers
└── routes/
    └── todo.routes.ts       # Route definitions
```

---

## Notes

- Data is stored in-memory and will be lost when the server restarts
- No authentication or authorization implemented
- IDs are auto-incrementing integers converted to strings
