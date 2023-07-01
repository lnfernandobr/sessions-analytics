import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { AuthenticatedLayout } from "../layouts/AuthenticatedLayout";
import { AnalyzedSessions } from "../sessions/AnalyzedSessions";
import { About } from "../about/About";

export const AuthenticatedRoutes = () => (
  <AuthenticatedLayout>
    <Routes>
      <Route path={RoutePaths.ROOT} element={<AnalyzedSessions />} />
      <Route path={`/${RoutePaths.ABOUT}`} element={<About />} />
    </Routes>
  </AuthenticatedLayout>
);
