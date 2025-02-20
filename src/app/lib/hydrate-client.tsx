"use client";

import { ReactNode } from "react";

import { Hydrate, QueryClientProvider, QueryClient } from "react-query";

export function HydrateClient({
  children,
  state,
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>{children}</Hydrate>
    </QueryClientProvider>
  );
}
