"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function ButtonSignOut() {
  const { replace } = useRouter();

  async function handleSignOut() {
    await signOut({
      redirect: false,
    });

    replace("/");
  }
  return (
    <button
      className="text-xs text-end hover:underline"
      onClick={handleSignOut}>
      sair
    </button>
  );
}
