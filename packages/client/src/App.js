import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";
import {useAuth} from "./users/UserContext";

export const App = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <UnauthenticatedRoutes />;
  }

  return <AuthenticatedRoutes />;
};
