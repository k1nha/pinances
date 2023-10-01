import { getSession } from "next-auth/react";
import { HTTP } from "..";

export const getAllFinances = async () => {
  const session = await getSession();

  const response = await HTTP.get(`/v1/transactions/${session?.user.user_id}`);

  const data = response.data();

  return data;
};

// TODO: Type body
export const createFinance = async (body: any) => {
  const session = await getSession();

  const response = await HTTP.post(
    `/v1/transactions/${session?.user.user_id}`,
    body
  );

  const data = response.data();

  return data;
};
