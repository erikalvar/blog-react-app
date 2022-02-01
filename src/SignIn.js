import React from "react";
import { useParams } from "react-router-dom";

export default function SignIn() {
  let{ id } = useParams();
  return (
    <>
      <h1>This is a sign in page</h1>
      <p>username will go hear</p>
      <p>password will go hear</p>
    </>
  )
}
