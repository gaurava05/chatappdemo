import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
  
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});