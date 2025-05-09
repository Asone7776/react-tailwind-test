import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useTranslation} from "react-i18next";
import {Button} from "@shared/components/ui/button.tsx";

interface UniversalFormProps<TSchema extends z.ZodTypeAny> {
    schema: TSchema;
}


function UniversalForm<TSchema extends z.ZodTypeAny>({schema}: UniversalFormProps<TSchema>) {
    const {t} = useTranslation();

    const submitAction: SubmitHandler<z.infer<TSchema>> = (data) => {
        console.log(data);
    }


    const {handleSubmit, formState: {errors}} = useForm<z.infer<TSchema>>({
        resolver: zodResolver(schema)
    });
    return (
        <form onSubmit={handleSubmit(submitAction)}>
            {JSON.stringify(errors, null, 2)}
            <Button type="submit">
                {t('send')}
            </Button>
        </form>
    );
}

export default UniversalForm;