import { create } from 'zustand';
import { User } from '@custom-types/user.ts';

interface ProfileStoreState {
  profile: User | undefined;
  isLoaded: boolean;
  setProfile(data: User): void;
  clearProfile(): void;
}

export const useProfile = create<ProfileStoreState>((set) => ({
  profile: undefined,
  isLoaded: false,
  setProfile: (data: User) => {
    set({ profile: data, isLoaded: true });
  },
  clearProfile: () => {
    set({ profile: undefined, isLoaded: false });
  },
}));
