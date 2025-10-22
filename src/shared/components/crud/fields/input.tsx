import { Input } from '@shared/components/ui/input';
import { UseFormRegister, Path, FieldValues } from 'react-hook-form';
import { FormFieldAttributes } from '@custom-types/form.ts';

type InputProps<TFormValues extends FieldValues> = {
  label?: string;
  register: UseFormRegister<TFormValues>;
  code: Path<TFormValues>;
  attributes?: FormFieldAttributes;
};

const FieldInput = <TFormValues extends FieldValues>({
  label,
  code,
  register,
  attributes,
}: InputProps<TFormValues>) => {
  return (
    <div>
      {label && <label className={'block mb-2'}>{label}</label>}
      <Input
        type={attributes?.type || 'text'}
        {...register(code)}
        className={'w-full block'}
      />
    </div>
  );
};

export default FieldInput;
