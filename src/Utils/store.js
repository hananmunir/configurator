import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#0000ff",
  changeColor: (color) => set((state) => ({ color: color })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useColorStore;
