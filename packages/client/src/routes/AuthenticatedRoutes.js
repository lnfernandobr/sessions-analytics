import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { AuthenticatedLayout } from "../layouts/AuthenticatedLayout";
import { AnalyzedSessions } from "../sessions/AnalyzedSessions";

export const AuthenticatedRoutes = () => (
  <AuthenticatedLayout>
    <Routes>
      <Route path={RoutePaths.ROOT} element={<AnalyzedSessions />} />
    </Routes>
  </AuthenticatedLayout>
);
