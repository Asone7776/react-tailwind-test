import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryClientProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

function QueryProvider({ children }: QueryClientProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
export default QueryProvider;
