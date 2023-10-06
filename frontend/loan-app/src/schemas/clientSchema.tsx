import * as z from 'zod';

export const clientSchema = z.object({
    id: z.number(),
    name: z.string(),
    phone: z.string(),
    cpf: z.string(),
    bank_label: z.string(),
    account_type_label: z.string(),
    account_number: z.string(),
});

export const searchClientSchema = z.object({
    cpf: z.number(),
});

export type TClient = z.infer<typeof clientSchema>;
