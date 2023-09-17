import { Login } from "@/modules/user";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={"min-h-screen w-full flex"}>
        <section
          className={
            "w-1/2 p-10 bg-black text-white hidden lg:flex flex-col justify-between"
          }>
          <Link href={"/"} className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#fff"
              viewBox="0 0 256 256">
              <path d="M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z"></path>
            </svg>
            <h1 className={"font-semibold"}>Pinances</h1>
          </Link>

          <article>
            <p className={"text-lg font-thin"}>
              {'"'}Dinheiro e sucesso não mudam as pessoas, eles só ampliam o
              que já está lá.{'"'}
            </p>
            <p className={"text-sm font-semibold"}>Will Smith</p>
          </article>
        </section>

        <section
          className={
            "w-full lg:w-1/2 bg-white flex gap-2 flex-col items-center justify-center text-black"
          }>
          <Link
            href={"/"}
            className="flex lg:hidden gap-2 items-center absolute top-10 left-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#000"
              viewBox="0 0 256 256">
              <path d="M216,96H176V56a8,8,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Zm80-48H48V112H208Z"></path>
            </svg>
            <h1 className={"font-semibold"}>Pinances</h1>
          </Link>

          <h2 className={"text-3xl font-semibold"}>Login</h2>
          <p className={"text-center text-sm text-gray-500"}>
            Entre seu email e senha para efetuar o login
          </p>

          <Login />
        </section>
      </main>
    </>
  );
}
