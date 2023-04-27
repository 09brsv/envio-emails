/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      blueLight: "#DEEAF0",
      blackBg: "#141212",
      whiteText: "#FFFFFF",
      blueDark: "#3C53CF",
      blackTransparent: "#000000",
      redBg: "#B81414",
    },
  },
};
export const plugins = [];

//  #000000  45%   blackTransparent
//  #B81414 88%     red
