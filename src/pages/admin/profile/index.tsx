import ProfileInfo from '@widgets/profile/cards/info.tsx';
import ProfileTabs from '@widgets/profile/cards/tabs.tsx';

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="col-span-1">
        <ProfileInfo />
      </div>
      <div className="col-span-2">
        <ProfileTabs />
      </div>
    </div>
  );
}
