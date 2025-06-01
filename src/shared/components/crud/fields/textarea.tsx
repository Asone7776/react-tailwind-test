import {Textarea} from "@shared/components/ui/textarea"
import {UseFormRegister, Path, FieldValues} from "react-hook-form";

type InputProps<TFormValues extends FieldValues> = {
    label?: string
    register: UseFormRegister<TFormValues>,
    code: Path<TFormValues>
}

const FieldTextArea = <TFormValues extends FieldValues, >({label, code, register}: InputProps<TFormValues>) => {
    return (
        <div>
            {label && (
                <label className={'block mb-2'}>{label}</label>
            )}
            <Textarea {...register(code)}/>
        </div>
    );
}

export default FieldTextArea;