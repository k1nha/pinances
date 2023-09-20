"use client";
import { Toaster } from "@/components/ui";
import { queryClient } from "@/lib/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../providers/auth.provider";

export function Context({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </>
  );
}
