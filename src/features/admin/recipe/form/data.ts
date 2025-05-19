import * as z from 'zod';
import {FieldTypes, FormField} from "@custom-types/form.ts";

export const RecipeSchema = z.object({
    title: z.string(),
    fruit: z.string()
});

export type RecipeFormType = z.infer<typeof RecipeSchema>;

export const fields: FormField<RecipeFormType>[] = [
    {
        label: "Recipe name",
        code: "title",
        type: FieldTypes.text
    },
    {
        label: "Test",
        code: "fruit",
        type: FieldTypes.select,
        attributes: {
            items: [
                {
                    label: "Не выбрано",
                    value: null
                },
                {
                    label: "Apple",
                    value: "apple",
                },
                {
                    label: "Pineaple",
                    value: "pineaple",
                }
            ]
        }
    },
]