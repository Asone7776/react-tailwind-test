import {Fragment} from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useTranslation} from "react-i18next";
import {Button} from "@shared/components/ui/button.tsx";
import {FieldTypes, FormField} from "@custom-types/form.ts";
import ValidationAlert from "@shared/components/alert/validation.tsx";
import FieldInput from "@shared/components/crud/fields/input.tsx";
import FieldSelect from "@shared/components/crud/fields/select.tsx";
import FieldTextArea from "@shared/components/crud/fields/textarea.tsx";
import FieldRadio from "@shared/components/crud/fields/radio.tsx";
import FieldSingleImageUpload from "@shared/components/crud/fields/upload/image/single";
import {toast} from "sonner"

interface UniversalFormProps<TSchema extends z.ZodTypeAny> {
    schema: TSchema;
    fields: FormField<z.infer<TSchema>>[];
    defaultValues?: z.infer<TSchema>;
}


function UniversalForm<TSchema extends z.ZodTypeAny>({schema, fields, defaultValues}: UniversalFormProps<TSchema>) {
    const {t} = useTranslation();

    const submitAction: SubmitHandler<z.infer<TSchema>> = (data) => {
        console.log(data);
        toast.success('Successfully submitted data!');
    }


    const {handleSubmit, register, control, formState: {errors}} = useForm<z.infer<TSchema>>({
        defaultValues,
        resolver: zodResolver(schema)
    });


    return (
        <form onSubmit={handleSubmit(submitAction)} className={'flex flex-col gap-y-4'}>
            {fields.map((field) => {
                switch (field.type) {
                    case FieldTypes.textarea:
                        return (
                            <Fragment key={field.code}>
                                <FieldTextArea<z.infer<typeof schema>>
                                    label={field.label}
                                    code={field.code}
                                    register={register}
                                />
                                {errors?.[field.code] && (
                                    <ValidationAlert>{errors[field.code]?.message?.toString()}</ValidationAlert>
                                )}
                            </Fragment>
                        )
                    case FieldTypes.select:
                        return (
                            <Fragment key={field.code}>
                                <FieldSelect<z.infer<typeof schema>>
                                    label={field.label}
                                    code={field.code}
                                    attributes={field.attributes}
                                    control={control}
                                />
                                {errors?.[field.code] && (
                                    <ValidationAlert>{errors[field.code]?.message?.toString()}</ValidationAlert>
                                )}
                            </Fragment>
                        )
                    case FieldTypes.radio:
                        return (
                            <Fragment key={field.code}>
                                <FieldRadio<z.infer<typeof schema>>
                                    label={field.label}
                                    code={field.code}
                                    attributes={field.attributes}
                                    control={control}
                                />
                                {errors?.[field.code] && (
                                    <ValidationAlert>{errors[field.code]?.message?.toString()}</ValidationAlert>
                                )}
                            </Fragment>
                        )
                    case FieldTypes.image_picker_single:
                        return (
                            <Fragment key={field.code}>
                                <FieldSingleImageUpload<z.infer<typeof schema>>
                                    label={field.label}
                                    code={field.code}
                                    attributes={field.attributes}
                                    control={control}
                                />
                                {errors?.[field.code] && (
                                    <ValidationAlert>{errors[field.code]?.message?.toString()}</ValidationAlert>
                                )}
                            </Fragment>
                        )
                    default:
                        return (
                            <Fragment key={field.code}>
                                <FieldInput<z.infer<typeof schema>>
                                    label={field.label}
                                    code={field.code}
                                    register={register}
                                    attributes={field.attributes}
                                />
                                {errors?.[field.code] && (
                                    <ValidationAlert>{errors[field.code]?.message?.toString()}</ValidationAlert>
                                )}
                            </Fragment>
                        )
                }
            })}
            <div className={'flex justify-center'}>
                <Button type="submit">
                    {t('send')}
                </Button>
            </div>
        </form>
    );
}

export default UniversalForm;