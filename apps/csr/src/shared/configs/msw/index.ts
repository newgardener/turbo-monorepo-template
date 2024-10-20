export const initMsw = async () => {
  const { worker } = await import('@/shared/configs/msw/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
};
