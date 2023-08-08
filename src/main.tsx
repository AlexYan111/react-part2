import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

// Global Query Settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // how many times to retry on errors
      cacheTime: 300000, // 5 minutes, garbage collection
      staleTime: 10 * 1000, // 10s, how long the data is considered fresh, default is 0
      refetchOnWindowFocus: false, // refetch data when window regains focus, but default is true
      refetchOnMount: false, // refetch data when component mounts, but default is true
      refetchOnReconnect: false, // refetch data when network reconnects, but default is true
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
