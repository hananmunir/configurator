import { create } from "zustand";
import { colors, surface } from "../Constants/data";

const useColorStore = create((set) => ({
  colors: {
    rim: colors[Math.floor(colors.length / 2)],
    frame: colors[Math.floor(colors.length / 2)],
  },
  surface: {
    rim: surface[0],
    frame: surface[0],
  },
  changeColor: (color) =>
    set((state) => ({
      colors: {
        ...state.colors,
        [state.selectedPart]: color,
      },
    })),
  setSurface: (surface) =>
    set((state) => ({
      surface: {
        ...state.surface,
        [state.selectedPart]: surface,
      },
    })),
  selectedPart: "rim",
  changePart: (part) => set(() => ({ selectedPart: part })),
}));

export default useColorStore;
