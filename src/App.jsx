import { Toaster } from "sonner";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors duration={1500} position="top-right" />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
