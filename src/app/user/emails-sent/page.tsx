"use client";
import { TSentEmail } from "@/@types/Email";
import { AuthContext } from "@/Contexts/Auth/AuthContexts";
import Api from "@/components/Hooks/Axios";
import NavBarHeader from "@/components/Nav/NavBarHeader";
import { useContext, useEffect, useState } from "react";

export default function EmailsSent() {
  const [emails, setEmails] = useState<TSentEmail | null>(null);
  const token = useContext(AuthContext)

  const api = Api();

  useEffect(() => {
    const getEmails = async (token: string | null) => {
      api
        .get("/user/sent-emails", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setEmails(response.data));
    };

    getEmails(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <NavBarHeader text="Emails enviados" />
          <NavBarHeader text="Novo destinatário" />
        </ul>
      </nav>

    </div>
  );
}
