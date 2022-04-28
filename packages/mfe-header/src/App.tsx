import { useState } from "react";

import { Header } from "./components/Header";

export const App = () => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("typer:user")) || null
  );

  return <Header user={user} />;
};
