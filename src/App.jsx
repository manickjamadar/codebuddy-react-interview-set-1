import { Toaster } from "sonner";
import Router from "./Router";

function App() {
  return (
    <>
      <Toaster richColors duration={1500} position="top-right" />
      <Router />
    </>
  );
}

export default App;
