import { createServer } from 'http';
import { multiply } from '@test-org/utils';
import express from 'express';

console.log({ local: process.env.LOCAL });
console.log(multiply(2, 7));

export const initApp = async () => {
  const PORT = parseInt('9001', 10);

  const app = express();

  const server = createServer(app);

  app.get('/', (_, res) => {
    res.json({ hello: 'world' });
  });

  server.listen(PORT, () => {
    console.log(`Server v1 started on port ${PORT}`);
  });
};

initApp();
