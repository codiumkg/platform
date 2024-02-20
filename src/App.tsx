import { Toaster } from "react-hot-toast";
import RootRouter from "./components/RootRouter/RootRouter";

function App() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-primary">
      <Toaster />
      <RootRouter />
    </main>
  );
}

export default App;
