export enum FieldTypes {
    text = "text",
    textarea = "textarea",
    radio = "radio",
    switch = "switch",
    select = "select",
    date = "date",
    datetime = "datetime",
    hidden = "hidden",
    image_picker = "image-picker"
}

export interface SelectOptions {
    value: string;
    label: string;
}

export interface FormFieldAttributes {
    placeholder?: string;
    type?: "text" | "password" | "email",
    items?: SelectOptions[]
}

export interface FormField {
    label: string;
    code: string;
    type: FieldTypes;
    attributes?: FormFieldAttributes;
}