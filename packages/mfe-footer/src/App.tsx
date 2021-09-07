import { useState } from "react";

import { Footer } from "./components/Footer";
export const App = () => {
  const [state] = useState("dss");
  console.log("state", state);
  return <Footer />;
};
