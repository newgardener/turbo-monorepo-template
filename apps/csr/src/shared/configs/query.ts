import {
  focusManager,
  isServer,
  MutationCache,
  QueryCache,
  QueryClient,
} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
      networkMode: 'always',
      throwOnError: true,
    },
    mutations: {
      networkMode: 'always',
    },
  },
  queryCache: createQueryCache(),
  mutationCache: createMutationCache(),
});

function createQueryCache() {
  return new QueryCache({
    onError(error, query) {
      if (query.meta?.skipGlobalCapture) {
        return null;
      }
      alert(error.message);
    },
  });
}

function createMutationCache() {
  return new MutationCache({
    onError(error, _variables, _context, mutation) {
      if (mutation.meta?.skipGlobalCapture) {
        return null;
      }
      alert(error.message);
    },
  });
}

export function enableFocusManager() {
  focusManager.setEventListener((onFocus: (bool?: boolean) => void) => {
    if (!isServer) {
      const resume = () => onFocus(true);
      const pause = () => onFocus(false);

      document.addEventListener('resume', resume);
      document.addEventListener('pause', pause);
      return () => {
        document.removeEventListener('resume', resume);
        document.removeEventListener('pause', pause);
      };
    }
  });
}
