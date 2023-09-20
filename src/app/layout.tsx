import { Context } from "@/shared/context";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
