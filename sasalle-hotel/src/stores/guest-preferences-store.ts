import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface GuestPreferences {
  pillow?: string;
  arrivalTime?: string;
  dietary?: string;
  language?: string;
}

interface GuestPreferencesState {
  preferences: GuestPreferences;
  loyaltyStays: number;
  loyaltyNights: number;
  updatePreferences: (data: Partial<GuestPreferences>) => void;
  recordStay: (nights: number) => void;
}

export const useGuestPreferencesStore = create<GuestPreferencesState>()(
  persist(
    (set) => ({
      preferences: {},
      loyaltyStays: 0,
      loyaltyNights: 0,
      updatePreferences: (data) =>
        set((s) => ({ preferences: { ...s.preferences, ...data } })),
      recordStay: (nights) =>
        set((s) => ({
          loyaltyStays: s.loyaltyStays + 1,
          loyaltyNights: s.loyaltyNights + nights,
        })),
    }),
    { name: "sasalle-guest-preferences" },
  ),
);
