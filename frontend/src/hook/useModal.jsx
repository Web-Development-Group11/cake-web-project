import { create } from "zustand"

export const useModal = create((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setData: (data) => set({ data }),
}))