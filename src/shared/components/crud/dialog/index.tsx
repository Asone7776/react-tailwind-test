import { memo, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@shared/components/ui/dialog';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/components/ui/button.tsx';
import { useQueryParams } from '@app/hooks/use-query-params.ts';

interface DialogProps {
  title?: string;
  dialogKey: string;
  onClose?: () => void;
  children?: ReactNode;
}

function CrudDialog({
  title = 'create',
  children,
  dialogKey,
  onClose,
}: DialogProps) {
  const { t } = useTranslation();
  const translated_title = t(`${title}`);
  const { get, set, remove } = useQueryParams();
  const dialogValue = !!get('createDialog');
  const onOpenChange = (open: boolean) => {
    if (!open) {
      remove('createDialog');
      if (onClose) {
        onClose();
      }
      return;
    }
    set('createDialog', dialogKey);
    return;
  };
  return (
    <Dialog open={dialogValue} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>{translated_title}</Button>
      </DialogTrigger>
      <DialogContent className={'max-w lg:max-w-screen-md max-h-screen'}>
        <DialogHeader>
          <DialogTitle>{translated_title}</DialogTitle>
        </DialogHeader>
        <DialogDescription />
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default memo(CrudDialog);
