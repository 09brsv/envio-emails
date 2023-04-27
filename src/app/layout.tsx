"use client";
import { AuthProvider } from "@/Contexts/Auth/AuthProvider";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  router.push('/login')
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
