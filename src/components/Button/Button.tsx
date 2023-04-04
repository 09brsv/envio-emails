
import React from 'react'

type TButtonProps = {
  text: string;
  typeButton?: "button" | "submit" | "reset" | undefined;
}

function ButtonForm({ text, typeButton }: TButtonProps) {
  return <button type={typeButton}>{text}</button>;
}

export default ButtonForm