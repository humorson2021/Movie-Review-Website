import React from "react";

export default function Header({ app }) {
  return (
    <header className="headerContainer">
      <h1>{app}</h1>
    </header>
  );
}
