import { http, passthrough } from 'msw';

export const handlers = [
  http.all('*', ({ request }) => {
    const needToByPassMock = request.headers.get('x-msw-bypass') === 'true';
    if (needToByPassMock) {
      return passthrough();
    }
  }),
  // TODO: inject mocking handlers
];
