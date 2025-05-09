import * as z from 'zod';
import {FieldTypes, FormField} from "@custom-types/form.ts";

export const RecipeSchema = z.object({
    title: z.string().email(),
});

export const fields: FormField[] = [
    {
        label: "Recipe name",
        code: 'title',
        type: FieldTypes.text
    }
]