import React from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import NavbarEpic from "./components/navbar/NavbarEpic";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavbarEpic />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
