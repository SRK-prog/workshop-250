module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      "btn-color-primary": "#FF6142",
      "btn-color-secondary": "#3D61B0",
      "primary-color": "#FFDB0A",
      "grey-color": "#F6FAFC",
      "navyblue-color": "#26458C",
      "blue-color": "#3D61B0",
      "darkblue-color": "#333333",
      "white-color": "#fff",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "h1-s": "44px",
      "h3-s": "34px",
      "h4-s": "24px",
      "h5-s": "18px",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      "4xl": "35px",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Poppins"],
    },
    screens: {
      xsm: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};