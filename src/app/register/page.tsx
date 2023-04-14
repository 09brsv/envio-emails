"use client"
import ButtonForm from "@/components/Button/Button";
import FormRegister from "@/components/Forms/FormRegister";
import styles from "./page.module.css";
export default function Register() {
  
  return (
    <div className={styles.main}>
      <FormRegister>
        <ButtonForm text="Cadastrar" typeButton="submit" />
      </FormRegister>
    </div>
  );
}
