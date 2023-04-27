import { RequireAuth } from "@/Contexts/Auth/RequireAuth";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireAuth>{children}</RequireAuth>;
}
