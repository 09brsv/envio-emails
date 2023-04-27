"use client";
import { AuthProvider } from "@/Contexts/Auth/AuthProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
