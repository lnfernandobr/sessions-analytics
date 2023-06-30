import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { logout } from "../utils";

const Sessions = () => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export const AuthenticatedRoutes = () => (
  <Routes>
    <Route path={RoutePaths.ROOT} element={<Sessions />} />
  </Routes>
);
