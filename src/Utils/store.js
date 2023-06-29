import { create } from "zustand";
import { colors } from "../Constants/data";

const useColorStore = create((set) => ({
  color: colors[Math.floor(colors.length / 2)],
  changeColor: (color) => set((state) => ({ color: color })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useColorStore;
