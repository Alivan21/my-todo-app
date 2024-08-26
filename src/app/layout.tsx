import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import QueryClientProviders from "@/components/query-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My ToDo App",
  description: "A simple todo app created with Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth !antialiased" lang="en">
      <body className={inter.className}>
        <QueryClientProviders>
          <AntdRegistry>{children}</AntdRegistry>
        </QueryClientProviders>
      </body>
    </html>
  );
}
