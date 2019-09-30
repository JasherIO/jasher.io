module.exports = {
  theme: {
    extend: {
      colors: {
        "primary": "#7ed957",
        "secondary": "#32a657",
        "tertiary": "#6b32a6",
        "dark": "#161719"
      },
    },
    fontFamily: {
      sans: [
        "system-ui",
        "sans-serif"
      ],
      serif: [
        "Constantia",
        "serif"
      ],
      mono: [
        "Menlo",
        "monospace"
      ],
      display: [
        "Work-Sans",
        "system-ui",
        "sans-serif"
      ],
      body: [
        "Open-Sans",
        "system-ui",
        "sans-serif"
      ]
    }
  },
  variants: {},
  plugins: [
    require("tailwindcss-transitions")({
      variants: [],
      properties: {
        color: "color",
        "border-color": "border-color",
        bg: "background-color",
        opacity: "opacity",
        transform: "transform"
      },
      durations: {
        default: "250ms",
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms"
      },
      timingFunctions: {
        default: "ease-out"
      },
      delays: {
        none: "0s"
      },
      willChange: {
        opacity: "opacity",
        transform: "transform"
      }
    })
  ],
}