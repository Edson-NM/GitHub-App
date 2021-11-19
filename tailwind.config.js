module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      ligth_blue: "#99FEFF",
      main_blue: "#2F86A6",
      strong_blue: "#000D6B",
      sky_blue: "#88E0EF",
      black: "#000",
      yellow: "#FBFF00",
      github_card: "#FF5C5C",
      github_card_line:"#E3ACAA",
      github_card_line2: "#8B7F7A",
      github_card_followers: "#EFEFEF",
      github_card_followers2: "#FF5D5A",
      red: "#FF0000",
      github_down: "#F0F0F0",
      github_down2: "#EFEFEF",
      github_text: "#4b4640",
      github_text2: "#454240"
    },
    
    screens:{
      'xsm':'450px', // => @media (min-width: 450px) { ... }
      'sm':'640px', // => @media (min-width: 640px) { ... }
      'md':'768px', // => @media (min-width: 768px) { ... }
      'lg':'1024px', // => @media (min-width: 1024px) { ... }
      'xl':'1280px', // => @media (min-width: 1280px) { ... }
       
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
