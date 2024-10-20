export const initMsw = async () => {
  const { worker } = await import('@/shared/config/msw/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
};
