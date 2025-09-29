import Link from "next/link";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <h2 className="mt-2 text-3xl font-extrabold">Iniciar sesión</h2>
      <div className="mt-4 w-full max-w-md">
        <form className="flex flex-col gap-2" action={login}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="bg-white shadow-xs"
            label="Correo electrónico"
          />

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            tabIndex={0}
            className="bg-white shadow-xs"
            label={"Contraseña"}
          />

          <Button className="mt-3" type="submit">
            Iniciar sesión
          </Button>

          <p className="mt-3 text-center text-sm">
            {"¿No tienes una cuenta? "}
            <Link href="/register" className="font-medium">
              Registrarse
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
