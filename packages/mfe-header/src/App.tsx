import { useEffect, useState } from "react";

import { Header } from "./components/Header";

export const App = () => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("typer:user")) || null
  );

  useEffect(() => {
    const onSignIn = () => {};
    window.addEventListener("auth:onSignIn", onSignIn);
  }, []);

  return <Header user={user} />;
};
