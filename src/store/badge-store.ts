import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface BadgeStoreProps {
  id: string
  name: string
  email: string
  eventTitle: string
  checkInURL: string
  image?: string
}

interface UseBadgeStoreProps {
  data: BadgeStoreProps | null
  save: (badge: BadgeStoreProps) => void
  remove: () => void
  updateAvatar: (uri: string) => void
}

export const useBadgeStore = create(
  persist<UseBadgeStoreProps>(
    (set) => ({
      data: null,

      save: (data: BadgeStoreProps) => set(() => ({ data })),
      remove: () => set(() => ({ data: null })),
      updateAvatar: (uri: string) =>
        set((state) => ({
          data: state.data ? { ...state.data, image: uri } : state.data,
        })),
    }),
    {
      name: 'nlw-unite:badge',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
