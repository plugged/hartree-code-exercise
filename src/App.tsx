import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { Products } from "./containers/Products/Products";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Products />
      </main>
    </QueryClientProvider>
  );
}

export default App;
