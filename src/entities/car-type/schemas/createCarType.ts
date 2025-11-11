import * as z from 'zod';

export const CreateCarTypeSchema = z.object({
  type: z.string().nonempty(),
  translations: z.array(
    z.object({
      lang: z.string(),
      title: z.string().nonempty(),
    }),
  ),
});
export type CreateCarTypeSchemaType = z.infer<typeof CreateCarTypeSchema>;
