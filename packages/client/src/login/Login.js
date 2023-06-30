import React, { useState } from "react";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { toast } from "react-toastify";

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ password: "", email: "" });

  const onChange = ({ target: { value, name } }) =>
    setForm((prevState) => ({ ...prevState, [name]: value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    toast("You are logged in", { type: "info" });
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
          <Button type="submit">{isRegister ? "Create account" : "Sign-in"}</Button>
        </form>
      </div>
    </div>
  );
};
