import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@shared/components/ui/card.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@shared/components/ui/tabs.tsx';
import { Car, FileText } from 'lucide-react';
import { lazy, Suspense } from 'react';

const ProfileCarTab = lazy(() => import('@widgets/profile/tabs/cars'));
const OrdersCarTab = lazy(() => import('@widgets/profile/tabs/orders.tsx'));

function ProfileTabs() {
  const tabs = [
    {
      value: 'cars',
      title: 'Мои автомобили',
      icon: <Car className="size-4" />,
      component: <ProfileCarTab />,
    },
    {
      value: 'requests',
      title: 'Мои заявки',
      icon: <FileText className="size-4" />,
      component: <OrdersCarTab />,
    },
  ];

  return (
    <Card className="from-primary/5 to-card dark:bg-card bg-gradient-to-t shadow-xs h-full">
      <CardHeader>
        <CardDescription>Мой профиль</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">
          Управление
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue={tabs[0].value} className="w-full">
          {/* Список табов */}
          <TabsList className={`grid w-full grid-cols-${tabs.length} mb-4`}>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2"
              >
                {tab.icon}
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Контент табов */}
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Suspense
                fallback={
                  <div className="rounded-md border p-4 text-sm text-muted-foreground">
                    ⏳ Загрузка {tab.title.toLowerCase()}...
                  </div>
                }
              >
                {tab.component}
              </Suspense>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default ProfileTabs;
