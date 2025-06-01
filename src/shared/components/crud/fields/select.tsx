import {
    Controller,
    FieldValues,
    Path,
    Control,
} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@shared/components/ui/select";
import {FormFieldAttributes, SelectOptions} from "@custom-types/form.ts";

interface SelectProps<TFormValues extends FieldValues> {
    label?: string;
    control: Control<TFormValues>;
    code: Path<TFormValues>;
    attributes?: FormFieldAttributes;
}

function FieldSelect<TFormValues extends FieldValues>({
                                                          label,
                                                          attributes,
                                                          code,
                                                          control,
                                                      }: SelectProps<TFormValues>) {
    const items = attributes?.items?.map((item: SelectOptions) => (
        <SelectItem key={item.value} value={item.value}>
            {item.label}
        </SelectItem>
    ));

    return (
        <div>
            {label && <label className="block mb-2">{label}</label>}
            <Controller
                control={control}
                name={code}
                render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={label} />
                        </SelectTrigger>
                        {items && <SelectContent>{items}</SelectContent>}
                    </Select>
                )}
            />
        </div>
    );
}

export default FieldSelect;
