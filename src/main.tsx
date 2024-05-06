// import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import "@/requests/request.ts";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      gcTime: 60000 * 3,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </NextUIProvider>
  // </React.StrictMode>
);
