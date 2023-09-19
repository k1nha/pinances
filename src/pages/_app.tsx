import { Toaster } from "@/components/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { queryClient } from "@/lib/query";
import { AuthProvider } from "@/shared/providers/auth.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pinances</title>
      </Head>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
