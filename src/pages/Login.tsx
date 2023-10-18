import { uniLogo } from '../assets/img';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Login() {
  return (
    <>
      <Header />
      <main className="py-10">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-5 my-5 ">
          Bienvenido
        </h1>
        <div>
          <img src={uniLogo} alt="" className="mx-auto max-h-64" />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Correo Electronico" />
        </div>
        <TextInput id="email1" placeholder="Email" required type="email" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Password" />
        </div>
        <TextInput id="password1" required type="password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Recordar</Label>
      </div>
      <Button type="submit" className="bg-green">
        Iniciar Sesión
      </Button>
    </form>
  );
}
