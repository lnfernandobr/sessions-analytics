import { useState } from "react";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ password: "", email: "" });

  const onChange = ({ target: { value, name } }) =>
    setForm((prevState) => ({ ...prevState, [name]: value }));

  const onSubmit = async (event) => {
    event.preventDefault();
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
            {isRegister ? "Quero fazer login" : "Quero fazer cadastro"}
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
                placeholder="Nome"
                label="Nome"
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
              placeholder="Senha"
              label="Senha"
            />
          </div>
          <Button type="submit">{isRegister ? "Cadastrar" : "Entrar"}</Button>
        </form>
      </div>
    </div>
  );
};
