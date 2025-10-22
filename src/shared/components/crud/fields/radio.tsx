import { Controller, FieldValues, Path, Control } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@shared/components/ui/radio-group';
import { Label } from '@shared/components/ui/label';
import { FormFieldAttributes, SelectOptions } from '@custom-types/form.ts';

interface SelectProps<TFormValues extends FieldValues> {
  label?: string;
  control: Control<TFormValues>;
  code: Path<TFormValues>;
  attributes?: FormFieldAttributes;
}

function FieldRadio<TFormValues extends FieldValues>({
  label,
  attributes,
  code,
  control,
}: SelectProps<TFormValues>) {
  const items = attributes?.items?.map((item: SelectOptions) => (
    <div className="flex items-center space-x-2" key={item.value}>
      <RadioGroupItem value={item.value} id={`item-radio-${item.value}`} />
      <Label htmlFor={`item-radio-${item.value}`}>{item.label}</Label>
    </div>
  ));

  return (
    <div>
      {label && <Label className="block mb-2">{label}</Label>}
      <Controller
        control={control}
        name={code}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            {items}
          </RadioGroup>
        )}
      />
    </div>
  );
}

export default FieldRadio;
