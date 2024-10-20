import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from '@/shared/configs/msw/server';

beforeAll(() => {
  server.listen();
});

afterEach(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 0);
  });
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
