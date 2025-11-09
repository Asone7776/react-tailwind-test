import CrudDialog from '@shared/components/crud/dialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CreateCarTypeSchema,
  CreateCarTypeSchemaType,
} from '@entities/car-type/schemas/createCarType.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/components/ui/button.tsx';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
} from '@shared/components/ui/form';
import { Input } from '@shared/components/ui/input';
import { t } from 'i18next';
import FieldTranslation from '@shared/components/crud/fields/translations.tsx';

function CreateCarType() {
  const form = useForm<CreateCarTypeSchemaType>({
    resolver: zodResolver(CreateCarTypeSchema),
    defaultValues: {
      type: '',
      translations: [
        {
          lang: 'ru',
          title: '',
        },
        {
          lang: 'en',
          title: '',
        },
        {
          lang: 'uz',
          title: '',
        },
      ],
    },
  });
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<CreateCarTypeSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <CrudDialog dialogKey={'createCarType'}>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex flex-col gap-4'}>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <>
                    <FormLabel>Тип автомобиля</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </>
                )}
              />
              <FieldTranslation control={form.control} code={'translations'} />
            </div>
            <Button className={'mt-4 ml-auto flex'} type={'submit'}>
              {t('send')}
            </Button>
          </form>
        </Form>
      </CrudDialog>
    </>
  );
}

export default CreateCarType;
