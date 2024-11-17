import create from 'zustand';

type Store = {
  recurrenceType: string;
  setRecurrenceType: (type: string) => void;
  interval: number;
  setInterval: (interval: number) => void;
  startDate: Date | null;
  setStartDate: (date: Date) => void;
  endDate: Date | null;
  setEndDate: (date: Date) => void;
};

export const useStore = create<Store>((set) => ({
  recurrenceType: 'daily',
  setRecurrenceType: (type) => set(() => ({ recurrenceType: type })),
  interval: 1,
  setInterval: (interval) => set(() => ({ interval })),
  startDate: null,
  setStartDate: (date) => set(() => ({ startDate: date })),
  endDate: null,
  setEndDate: (date) => set(() => ({ endDate: date })),
}));
