import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";

export const App = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <UnauthenticatedRoutes />;
  }

  return <AuthenticatedRoutes />;
};
