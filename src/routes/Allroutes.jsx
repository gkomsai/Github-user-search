import React from "react";
import { Routes, Route } from "react-router-dom";
import Followers from "../pages/Followers";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/follwers" element={<Followers />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
