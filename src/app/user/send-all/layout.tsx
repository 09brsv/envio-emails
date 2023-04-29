export const metadata = {
  title: "Enviar para vários",
  description: "Enviar um email para vários destinatários",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
