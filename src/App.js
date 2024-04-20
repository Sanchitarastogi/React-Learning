import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { About } from "./Components/About";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
