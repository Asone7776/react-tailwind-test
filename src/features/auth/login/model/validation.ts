import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).nonempty(),
})

export type LoginFormFields = z.infer<typeof LoginSchema>;