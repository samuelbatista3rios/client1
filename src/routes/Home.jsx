import React from "react";
import Header from "../components/Header";
import AddRoutes from "../components/AddRoutes";
import RoutesList from "../components/RoutesList";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header /> 
      <AddRoutes />
      <RoutesList/>
    </div>
  );
};

export default Home;
