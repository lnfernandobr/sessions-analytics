import { api } from "./services/api";
import { TOKEN_KEY } from "./constants";

export const logout = async () => {
  try {
    await api.post("/auth/signout");
    localStorage.removeItem(TOKEN_KEY);
    window.location = "/";
  } catch (error) {
    console.log(error);
  }
};
