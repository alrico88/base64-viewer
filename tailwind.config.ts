import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: "Fira Sans",
    },
  },
  content: [],
  plugins: [daisyui()],
  safelist: ["cm-editor"],
};
