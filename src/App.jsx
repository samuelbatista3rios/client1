import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import GetRoutes from "./components/GetRoutes";
import { TrucksContextProvider } from "./context/TrucksContext";
//import { Route, Switch } from "react-router"

import Home from "./routes/Home.jsx";
import UpdatePage from "./routes/UpdatePage";
import Upload from "./routes/Upload";

const App = () => {
  return (
    <TrucksContextProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id/update" element={<UpdatePage />} />
            <Route exact path="/upload" element={<Upload />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TrucksContextProvider>
  );
};

export default App;
