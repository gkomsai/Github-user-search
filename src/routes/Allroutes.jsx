import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleRepoDetails from "../components/SingleRepoDetails";
import Followers from "../pages/Followers";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/followers" element={<Followers />} />
      <Route path="/repodetails/:id" element={<SingleRepoDetails />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
