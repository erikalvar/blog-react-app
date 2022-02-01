import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <h1>This is the home page</h1>
    <p>This is some content</p>
    <Link to="/signin">Sign In</Link>
    </>
  )
}