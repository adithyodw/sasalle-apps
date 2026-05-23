import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BookingDraft, RoomType } from "@/lib/booking/types";

interface BookingState {
  step: 1 | 2 | 3;
  draft: Partial<BookingDraft>;
  setStep: (step: 1 | 2 | 3) => void;
  updateDraft: (data: Partial<BookingDraft>) => void;
  selectRoom: (roomId: RoomType) => void;
  reset: () => void;
}

const initialDraft: Partial<BookingDraft> = {
  guests: 2,
  roomId: "heritage",
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      step: 1,
      draft: initialDraft,
      setStep: (step) => set({ step }),
      updateDraft: (data) =>
        set((s) => ({ draft: { ...s.draft, ...data } })),
      selectRoom: (roomId) =>
        set((s) => ({ draft: { ...s.draft, roomId } })),
      reset: () => set({ step: 1, draft: initialDraft }),
    }),
    { name: "sasalle-booking" },
  ),
);
