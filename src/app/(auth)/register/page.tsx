import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/lib/actions/auth";

export default function Register() {
  return (
    <>
      <h2 className="mt-2 text-3xl font-extrabold">{"Registrarse"}</h2>
      <div className="mt-4 w-full max-w-md">
        <form className="flex flex-col gap-1" action={signup}>
          <Input
            id="email"
            name="email"
            type="email"
            tabIndex={0}
            className="bg-white shadow-xs"
            label={"Correo electrónico"}
          />

          <Input
            id="password"
            name="password"
            type="password"
            className="bg-white shadow-xs"
            label={"Contraseña"}
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="bg-white shadow-xs"
            label={"Confirmar contraseña"}
          />

          <Button className="mt-4" type="submit">
            {"Crear cuenta"}
          </Button>

          <p className="mt-2 text-center text-sm">
            {"¿Ya tienes una cuenta? "}
            <Link href="/" className="font-medium">
              {"Iniciar sesión"}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
