import { z } from "zod";

export const TransactionTypeSchema = z.object({
  name_type: z.string(),
  user_id: z.string(),
  finance_type: z.enum(["ENTRADA", "SAIDA"]),
});

export type TransactionType = z.infer<typeof TransactionTypeSchema>;
