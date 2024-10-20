import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from '@/shared/configs/msw/server';
import { queryClient } from '@/shared/configs/query';

beforeAll(() => {
  server.listen();
});

afterEach(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 0);
  });
  queryClient.clear();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
