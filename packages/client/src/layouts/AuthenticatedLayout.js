import React from "react";
import { AppMenu } from "../components/AppMenu";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <AppMenu />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          {children}
        </div>
      </div>
    </div>
  );
};
