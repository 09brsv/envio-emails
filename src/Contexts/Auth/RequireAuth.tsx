import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get('token');

  if (!token?.value) {
    redirect("/login");
  }
  return <>{children}</>;
};
