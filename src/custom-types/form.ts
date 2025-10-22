import { Path } from 'react-hook-form';

export enum FieldTypes {
  text = 'text',
  textarea = 'textarea',
  radio = 'radio',
  switch = 'switch',
  select = 'select',
  hidden = 'hidden',
  image_picker_single = 'image-picker-single',
}

export interface SelectOptions {
  value: string;
  label: string;
}

export interface FormFieldAttributes {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'date' | 'datetime-local';
  items?: SelectOptions[];
}

export interface FormField<T> {
  code: Path<T>;
  label?: string;
  type: FieldTypes;
  attributes?: FormFieldAttributes;
}

export interface ValidationError {
  message?: string;
  type: 'invalid_type';
}
