import React from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";

const Homepage = () => {
  const navHeader = { company: "Empresa A - Sala 210", user: "João Alves" };
  const navItems = ["Home", "Agendamentos", "Cadastros", "Report", "Sair"];

  return (
    <div className="flex h-screen w-screen">
      <Navbar navHeader={navHeader} navItems={navItems} />
      <Grid />
    </div>
  );
};

export default Homepage;
