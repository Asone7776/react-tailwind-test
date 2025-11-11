import { Input } from '@shared/components/ui/input';
import { Path, FieldValues, Control } from 'react-hook-form';
import { FormFieldAttributes } from '@custom-types/form.ts';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@shared/components/ui/form.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components/ui/accordion';

type FieldTranslationProps<TFormValues extends FieldValues> = {
  control: Control<TFormValues>;
  code: Path<TFormValues>;
  attributes?: FormFieldAttributes;
};

const FieldTranslation = <TFormValues extends FieldValues>({
  code,
  control,
  attributes,
}: FieldTranslationProps<TFormValues>) => {
  const { i18n } = useTranslation();
  const supportedLanguages = i18n.options?.supportedLngs as string[];
  const filteredLanguages = supportedLanguages.filter((l) => l !== 'cimode');

  return (
    <div className="grid gap-4">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={filteredLanguages[0]}
      >
        {filteredLanguages.map((lang, index) => (
          <FormField
            key={lang}
            control={control}
            name={`${code}.${index}.title` as Path<TFormValues>}
            render={({ field }) => (
              <AccordionItem value={lang}>
                <AccordionTrigger
                  className={'hover:no-underline focus:no-underline'}
                >
                  <FormLabel> {`Название (${lang.toUpperCase()})`}</FormLabel>
                </AccordionTrigger>
                <AccordionContent className={'flex flex-col gap-4'}>
                  <>
                    <FormControl>
                      <Input {...field} {...attributes} />
                    </FormControl>
                    <FormMessage />
                  </>
                </AccordionContent>
              </AccordionItem>
            )}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FieldTranslation;
