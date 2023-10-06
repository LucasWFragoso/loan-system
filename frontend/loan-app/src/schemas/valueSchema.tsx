import { z } from "zod";

export const valueDataRequestSchema = z.object({
    value: z.number().min(300).max(10000),
});

export type TValueDataRequest = z.infer<typeof valueDataRequestSchema>;