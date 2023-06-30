import React from "react";
import { NewSession } from "./NewSession";

export const Sessions = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-12 flex-wrap">
        <h1 className="text-2xl font-bold tracking-tight text-gray-500">
          Sessions Analytics
        </h1>

        <NewSession />
      </div>
    </div>
  );
};
