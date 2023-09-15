import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
});

export type User = z.infer<typeof UserSchema>;
