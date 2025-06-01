import * as z from 'zod';
import {FieldTypes, FormField} from "@custom-types/form.ts";

export const RecipeSchema = z.object({
    title: z.string(),
    fruit: z.string(),
    desc: z.string(),
    radio: z.string(),
    single_image: z.string().optional()
});

export type RecipeFormType = z.infer<typeof RecipeSchema>;

export const fields: FormField<RecipeFormType>[] = [
    {
        label: "Изображение",
        code: "single_image",
        type: FieldTypes.image_picker_single
    },
    {
        label: "Название",
        code: "title",
        type: FieldTypes.text,
    },
    {
        label: "Выбор",
        code: "fruit",
        type: FieldTypes.select,
        attributes: {
            items: [
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
    {
        label: "Описание",
        code: "desc",
        type: FieldTypes.textarea
    },
    {
        label: "Выбор варианта",
        code: "radio",
        type: FieldTypes.radio,
        attributes: {
            items: [
                {
                    label: "Test one",
                    value: "one",
                },
                {
                    label: "Test two",
                    value: "two",
                }
            ]
        }
    },
]