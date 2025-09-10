# Hackaholic Server

A Node.js TypeScript Express server that provides workflow broadcast API endpoints.

## Features

- TypeScript support
- Express.js framework
- CORS enabled
- RESTful API endpoints
- Sample workflow data

## API Endpoints

### GET /workflow/broadcast-id/

Returns an array of workflow objects with the following structure:

```typescript
{
  id: string;
  data: [
    {
      label: string;
      type: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'tiktok';
      clips: string[];
      blogpost: string[];
      socialpost: string[];
      email: string[];
    }
  ]
}
```

### GET /health

Health check endpoint to verify server status.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

## Development

For development with auto-reload:

```bash
npm run dev:watch
```

## Usage

The server will start on port 3000 by default. You can access:

- API endpoint: `http://localhost:3000/workflow/broadcast-id/`
- Health check: `http://localhost:3000/health`

## Project Structure

```
src/
├── index.ts          # Main server file
└── types/
    └── workflow.ts   # TypeScript interfaces
```
# goldcast-hackoholics-server
