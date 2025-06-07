import {Fragment} from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useTranslation} from "react-i18next";
import {Button} from "@shared/components/ui/button.tsx";
import {FieldTypes, FormField, ValidationError} from "@custom-types/form.ts";
import ValidationAlert from "@shared/components/alert/validation.tsx";
import FieldInput from "@shared/components/crud/fields/input.tsx";
import FieldSelect from "@shared/components/crud/fields/select.tsx";
import FieldTextArea from "@shared/components/crud/fields/textarea.tsx";
import FieldRadio from "@shared/components/crud/fields/radio.tsx";
import FieldSingleImageUpload from "@shared/components/crud/fields/upload/image/single";
import {toast} from "sonner";

interface UniversalFormProps<TSchema extends z.ZodTypeAny> {
    schema: TSchema;
    fields: FormField<z.infer<TSchema>>[];
    defaultValues?: z.infer<TSchema>;
}

const fieldComponents = {
    [FieldTypes.textarea]: FieldTextArea,
    [FieldTypes.select]: FieldSelect,
    [FieldTypes.radio]: FieldRadio,
    [FieldTypes.image_picker_single]: FieldSingleImageUpload,
    [FieldTypes.text]: FieldInput
} as const;

const FieldErrorComponent = ({error}: { error: ValidationError }) =>
    error ? (
        <ValidationAlert>{error?.message}</ValidationAlert>
    ) : null;

function UniversalForm<TSchema extends z.ZodTypeAny>({
                                                         schema,
                                                         fields,
                                                         defaultValues
                                                     }: UniversalFormProps<TSchema>) {
    const {t} = useTranslation();

    const submitAction: SubmitHandler<z.infer<TSchema>> = (data) => {
        console.log(data);
        toast.success('Successfully submitted data!');
    };

    const {
        handleSubmit,
        register,
        control,
        formState: {errors}
    } = useForm<z.infer<TSchema>>({
        defaultValues,
        resolver: zodResolver(schema)
    });

    return (
        <form onSubmit={handleSubmit(submitAction)} className="flex flex-col gap-y-4">
            {fields.map((field) => {
                const Component = fieldComponents[field.type as keyof typeof fieldComponents] || FieldInput;
                return (
                    <Fragment key={field.code}>
                        <Component
                            label={field.label}
                            code={field.code}
                            attributes={field.attributes}
                            register={register}
                            control={control}
                        />
                        {errors?.[field.code] && (
                            <FieldErrorComponent error={errors[field.code] as ValidationError}/>
                        )}
                    </Fragment>
                );
            })}

            <div className="flex justify-center">
                <Button type="submit">
                    {t('send')}
                </Button>
            </div>
        </form>
    );
}

export default UniversalForm;
