export const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "purple",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
  "magenta",
  "teal",
  "lime",
  "olive",
  "navy",
  "maroon",
];

export const surface = [
  "Polished Chrome",
  "Rusty",
  "Chipped Paint",
  "Polished Chrome",
  "Rusty",
  "Chipped Paint",
  "Polished Chrome",
  "Rusty",
  "Chipped Paint",
];
export const topcoat = [
  "Dawn Mist",
  "Glossy",
  "Leather",
  "Suede",
  "some other",
  "leather",
];
export const parts = ["rim", "frame"];
export const OptionsSet2 = [
  {
    title: "Rim Material",
    type: "material",
    options: ["Alloy", "Carbon Fiber"],
  },
  {
    title: "Rim Size",
    type: "size",
    options: ['16"', '18"'],
  },
  {
    title: "Current Surface",
    type: "surface",
    options: surface,
  },
  {
    title: "Urgency",
    type: "urgency",
    options: ["Urgent", "Not Urgent"],
  },
];
