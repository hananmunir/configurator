import { create } from "zustand";
import { colors } from "../Constants/data";

const useColorStore = create((set) => ({
  colors: {
    rim: colors[Math.floor(colors.length / 2)],
    frame: colors[Math.floor(colors.length / 2)],
  },
  changeColor: (color) =>
    set((state) => ({
      colors: {
        ...state.colors,
        [state.selectedPart]: color,
      },
    })),
  selectedPart: "rim",
  changePart: (part) => set(() => ({ selectedPart: part })),
}));

export default useColorStore;
