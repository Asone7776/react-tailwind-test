import { FC } from 'react';
import { Button } from '@shared/components/ui/button';
import ButtonSpinner from '@shared/components/spinners/button-spinner.tsx';
import { ButtonTypes } from '@custom-types/enums.ts';
import cn from 'clsx';

export interface DefaultButtonInterface {
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: ButtonTypes;
  onClick?: () => void;
}

const DefaultButton: FC<DefaultButtonInterface> = ({
  title = 'Submit',
  loading = false,
  className,
  ...props
}) => {
  const classes = cn(
    'cursor-pointer block w-full rounded-md bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 relative min-h-10',
    className,
  );
  return (
    <Button {...props} className={classes}>
      {loading ? <ButtonSpinner /> : title}
    </Button>
  );
};

export default DefaultButton;
