import * as z from 'zod';
import { clientSchema } from './clientSchema';
import { installmentSchema } from './installmentSchema';

export const dataCardRequestSchema = z.object({
    client_id: z.number(),
    installment_id: z.number(),
    card_number: z.string().max(16),
    card_name: z.string().max(50),
    valid_date: z.string().max(5),
    card_cvc: z.string().max(3)
});


export const dataCardResponseSchema = z.object({
    id: z.number(),
    card_number: z.string().max(16),
    card_name: z.string().max(50),
    valid_date: z.string().max(5),
    card_cvc: z.string().max(3),
    client: clientSchema,
    installment: installmentSchema,
});


export const dataCardSchema = z.object({
    card_number: z.string().max(16),
    card_name: z.string().max(50),
    valid_date: z.string().max(5),
    card_cvc: z.string().max(3),
});

export type TDataCard = z.infer<typeof dataCardSchema>;
export type TDataCardRequest = z.infer<typeof dataCardRequestSchema>;
export type TDataCardResponse = z.infer<typeof dataCardResponseSchema>;
