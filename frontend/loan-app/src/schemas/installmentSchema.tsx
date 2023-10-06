import { z } from "zod";

export const installmentResponseSchema = z.array(
    z.object({
        id: z.number(),
        installments: z.number(),
        installment_interest: z.number(),
        installment_value: z.number(),
        full_value: z.number(),
        comission: z.number(),
        tabelaTaxas: z.number(),
    })
);

export const installmentSchema = z.object({
        id: z.number(),
        installments: z.number(),
        installment_interest: z.number(),
        installment_value: z.number(),
        full_value: z.number(),
        comission: z.number(),
        tabelaTaxas: z.number(),
})

export type TInstallmentResponse = z.infer<typeof installmentResponseSchema>;
export type TInstallment = z.infer<typeof installmentSchema>;