import { create } from "zustand"

export const useModal = create((set) => ({
  isOpen: false,
  name: '',
  data: undefined,
  onOpen: (name) => set({ isOpen: true, name }),
  onClose: () => set({ isOpen: false }),
  setData: (data) => set({ data }),
}))