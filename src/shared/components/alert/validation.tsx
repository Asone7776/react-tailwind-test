import { FC } from 'react';
import { AlertCircle } from 'lucide-react';

interface ValidationAlertProps {
  children: React.ReactNode;
}

const ValidationAlert: FC<ValidationAlertProps> = ({ children }) => {
  return (
    <div className={'text-red-400 flex gap-x-2 items-center'}>
      <AlertCircle className="h-4 w-4" />
      {children}
    </div>
  );
};

export default ValidationAlert;
