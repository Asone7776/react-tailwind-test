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

interface DialogProps {
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
}

function CrudDialog({ title = 'create', children, onClose }: DialogProps) {
  const { t } = useTranslation();
  const translated_title = t(`${title}`);
  return (
    <Dialog onOpenChange={onClose}>
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
