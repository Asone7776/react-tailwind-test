import {Input} from "@shared/components/ui/input"
import {UseFormRegister, Path,FieldValues} from "react-hook-form";

type InputProps<TFormValues extends FieldValues> = {
    label?: string
    register: UseFormRegister<TFormValues>,
    code: Path<TFormValues>
}

const FieldInput = <TFormValues extends FieldValues, >({label, code, register}: InputProps<TFormValues>) => {
    return (
        <div>
            {label && (
                <label className={'block mb-2'}>{label}</label>
            )}
            <Input {...register(code)}/>
        </div>
    );
}

export default FieldInput;