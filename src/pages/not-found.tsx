import { FC } from 'react';
import { Button } from '@shared/components/ui/button.tsx';
import { Link } from 'react-router';

const NotFound: FC = () => {
  return (
    <div
      className={
        'min-h-svh flex flex-col justify-center items-center p-4 gap-4'
      }
    >
      <h3 className={'text-amber-300 font-bold text-2xl text-center'}>404</h3>
      <h1 className={'text-[min(10vw,50px)] text-center'}>
        Страница не найдена
      </h1>
      <div>
        <Link to={'/auth'} viewTransition>
          <Button asChild={false} variant={'default'} className={'bg-primary'}>
            На главную
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
