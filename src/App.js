import './App.css';
import Landing from './Home';
import ReducerProvider from './reducer/ReducerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // 1 min
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReducerProvider>
        {/* <PageContainer> */}
        {/* <Searchbar /> */}
        <Landing />
        {/* </PageContainer> */}
      </ReducerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
