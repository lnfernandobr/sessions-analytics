import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";

const Sessions = () => {
  return "Sessions";
};
export const AuthenticatedRoutes = () => (
  <Routes>
    <Route path={RoutePaths.ROOT} element={<Sessions />} />
  </Routes>
);
