import { HTTP } from "..";

export async function getAllInputs(id: string) {
  const response = await HTTP.get(`v1/transactiontype/input/${id}`);

  const data = response.data();

  return data;
}

export function getAllOutputs() {}
