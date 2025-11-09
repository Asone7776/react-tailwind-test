import * as z from 'zod';

export const CreateCarTypeSchema = z.object({
  type: z.string(),
  translations: z.array(
    z.object({
      lang: z.string(),
      title: z.string(),
    }),
  ),
});
export type CreateCarTypeSchemaType = z.infer<typeof CreateCarTypeSchema>;
