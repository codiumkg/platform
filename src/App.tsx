import { Toaster } from "react-hot-toast";
import RootRouter from "./components/RootRouter/RootRouter";
import cn from "classnames";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <main
      className={cn(
        "flex flex-col w-screen min-h-screen bg-background text-foreground",
        theme
      )}
    >
      <Toaster />
      <RootRouter />
    </main>
  );
}

export default App;
