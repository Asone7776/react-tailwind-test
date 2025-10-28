import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryClientProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 1000,
    },
    mutations: {
      retry: 0,
    },
  },
});

function QueryProvider({ children }: QueryClientProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
export default QueryProvider;
