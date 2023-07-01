import React from "react";
import { NewSession } from "./NewSession";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { VisitorSessions } from "./VisitorSessions";

export const AnalyzedSessions = () => {
  const fetchAnalyzedSessions = async () => {
    const response = await api.get("/sessions-by-user");
    return response.data;
  };

  const {
    data: { sessionsByUser = {} } = {},
    isLoading,
    refetch,
  } = useQuery("sessionsByUser", fetchAnalyzedSessions);

  return (
    <div>
      <div className="flex justify-between items-center mb-12 flex-wrap">
        <h1 className="text-2xl font-bold tracking-tight text-gray-500">
          Sessions Analytics
        </h1>

        <NewSession refetch={refetch} />
      </div>

      <VisitorSessions
        sessionsByUser={sessionsByUser}
        showSkeleton={isLoading}
      />
    </div>
  );
};
