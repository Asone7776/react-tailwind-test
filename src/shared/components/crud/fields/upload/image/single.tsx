import {useRef, useState} from "react";
import {
    Controller,
    FieldValues,
    Path,
    Control,
} from "react-hook-form";
import {
    Input
} from "@shared/components/ui/input";
import {ImagePlusIcon, XIcon} from 'lucide-react';
import {FormFieldAttributes} from "@custom-types/form.ts";

interface SelectProps<TFormValues extends FieldValues> {
    label?: string;
    control: Control<TFormValues>;
    code: Path<TFormValues>;
    attributes?: FormFieldAttributes;
}

function FieldSingleImageUpload<TFormValues extends FieldValues>({
                                                                     label,
                                                                     code,
                                                                     control,
                                                                 }: SelectProps<TFormValues>) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, onChange: (value?: string) => void) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            onChange(base64);
            setPreview(base64);
        }
        reader.readAsDataURL(file);
    }
    const handleClick = () => {
        inputRef.current?.click();
    }
    const deleteImage = () => {
        setPreview(null);
    }
    return (
        <div>
            {label && <label className="block mb-2">{label}</label>}
            <Controller
                control={control}
                name={code}
                render={({field}) => (
                    <>
                        {preview ? (
                            <div
                                className="mt-2 relative flex-center rounded-md border-2 max-w-[150px] min-w-[150px] h-[150px] overflow-hidden">
                                <div className={'absolute top-0 right-0 rounded-md bg-primary p-1 cursor-pointer'}
                                     onClick={deleteImage}>
                                    <XIcon className={'text-black'} size={18}/>
                                </div>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%'
                                    }}
                                />
                            </div>
                        ) : (
                            <div
                                className={'rounded-md border-2 flex justify-center items-center p-4 cursor-pointer bg-primary w-full max-w-[150px] h-[150px]'}
                                onClick={handleClick}>
                                <ImagePlusIcon size={56} className={'text-black'}/>
                            </div>
                        )}
                        <Input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, field.onChange)}
                            className={'hidden'}
                        />
                    </>
                )}
            />
        </div>
    );
}

export default FieldSingleImageUpload;
