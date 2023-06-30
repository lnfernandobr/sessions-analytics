import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { AuthenticatedLayout } from "../layouts/AuthenticatedLayout";
import { Sessions } from "../sessions/Sessions";

export const AuthenticatedRoutes = () => (
  <AuthenticatedLayout>
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Sessions />} />
    </Routes>
  </AuthenticatedLayout>
);
