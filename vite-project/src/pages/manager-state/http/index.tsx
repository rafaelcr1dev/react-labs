import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import HttpStateReactQuery from "./react-query";

const HttpStatePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HttpStateReactQuery />
    </QueryClientProvider>
  );
};

export default HttpStatePage;
