import React, { useState } from "react";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { toast } from "react-toastify";
import { clientErrorHandler } from "../services/errorHandler";
import { api } from "../services/api";
import { RoutePaths } from "../routes/RoutePaths";
import { TOKEN_KEY } from "../constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../users/UserContext";

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ password: "", email: "" });
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const onChange = ({ target: { value, name } }) =>
    setForm((prevState) => ({ ...prevState, [name]: value }));

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem(TOKEN_KEY, token);
    navigate(RoutePaths.ROOT);
    toast("Welcome!", { type: "info" });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = isRegister ? "/users/signup" : "/auth/signin";

      const data = {
        email: form.email.toLowerCase().trim(),
        password: form.password,
        ...(isRegister ? { name: form.name } : {}),
      };

      const response = await api.post(url, data);
      console.log(`response`, response);

      if (isRegister && response.data._id) {
        api.post("/auth/signin", data).then((r) => handleLogin(r.data.token));
        return;
      }

      const tk = response.data.token;
      if (tk) {
        handleLogin(tk);
      }
    } catch (err) {
      clientErrorHandler(err, true);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex items-center flex-col">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-400">
            Sessions Analytics
          </h2>

          <span
            className="underline text-blue-600 cursor-pointer"
            onClick={() => {
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? "I want to login" : "I want to create a new account"}
          </span>
        </div>

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            {isRegister && (
              <TextField
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Name"
                label="Name"
              />
            )}

            <TextField
              required
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              label="Email"
            />

            <TextField
              required
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="Password"
              label="Password"
            />
          </div>
          <Button type="submit">
            {isRegister ? "Create account" : "Sign-in"}
          </Button>
        </form>
      </div>
    </div>
  );
};
