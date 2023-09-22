import { getSession } from "next-auth/react";
import { HTTP } from "..";

export async function getAllInputs() {
  const response = await HTTP.get(`v1/transactiontype/input/`);

  const data = response.data();

  return data;
}

export function getAllOutputs() {}

export const getAllTypes = async () => {
  const session = await getSession();

  const res = await HTTP.get(`/v1/transactiontype/${session?.user.user_id}`);

  return res.data;
};
