import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster richColors duration={1500} position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
