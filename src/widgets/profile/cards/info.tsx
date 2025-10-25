import { MouseEvent, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from '@shared/components/ui/card.tsx';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@shared/components/ui/avatar.tsx';
import {
  LucideLock,
  LucideMail,
  PhoneCall,
  Settings,
  LogOutIcon,
} from 'lucide-react';
import { useProfile } from '@/store/profile-store.ts';
import { Button } from '@shared/components/ui/button.tsx';
import { useAuth } from '@shared/hooks/useAuth.ts';

function ProfileInfo() {
  const { profile } = useProfile();
  const { logout } = useAuth();

  const fullName = useMemo(
    () =>
      [profile?.last_name, profile?.first_name, profile?.middle_name]
        .filter(Boolean)
        .join(' ') || '—',
    [profile],
  );

  const handleLogout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    logout();
  };

  return (
    <Card className="from-primary/5 to-card dark:bg-card bg-gradient-to-t shadow-xs h-full">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="size-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
          <AvatarFallback>
            {profile
              ? `${profile.first_name?.[0] ?? ''}${profile.last_name?.[0] ?? ''}`.toUpperCase()
              : 'U'}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4">{fullName}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="bg-muted grid grid-cols-2 divide-x rounded-md border text-center *:py-2">
          <div>
            <h5 className="text-lg font-semibold">0</h5>
            <div className="text-muted-foreground text-sm">Заявки</div>
          </div>
          <div>
            <h5 className="text-lg font-semibold">0</h5>
            <div className="text-muted-foreground text-sm">Автомобилей</div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          {profile?.email ? (
            <div className="flex items-center gap-3 text-sm">
              <LucideMail className="text-muted-foreground size-5" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <LucideMail className="size-5" />
              Email не указан
            </div>
          )}

          {profile?.phone ? (
            <div className="flex items-center gap-3 text-sm">
              <PhoneCall className="text-muted-foreground size-5" />
              {profile.phone}
            </div>
          ) : (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <PhoneCall className="size-5" />
              Телефон не указан
            </div>
          )}

          {profile?.role && (
            <div className="flex items-center gap-3 text-sm">
              <LucideLock className="text-muted-foreground size-5" />
              {profile.role}
            </div>
          )}
        </div>
      </CardContent>
      <CardAction className={'flex justify-between px-6 mb-0 mt-auto w-full'}>
        <Button variant={'outline'}>
          <Settings />
          Настройки
        </Button>
        <Button variant={'outline'} onClick={handleLogout}>
          <LogOutIcon />
          Выйти
        </Button>
      </CardAction>
    </Card>
  );
}

export default ProfileInfo;
