import React from "react";
import MainRoutes from "./routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarEpic from "./components/navbar/NavbarEpic";

const App = () => {
  return (
    <div>
      <NavbarEpic />
      <MainRoutes />
    </div>
  );
};

export default App;
