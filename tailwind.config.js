/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/inscription.html",
    "./src/menu.html",
    "./src/contact.html",
    "./src/connection.html",
    "./src/reservation.html",
  ],
  theme: {
    extend: {
      width: {
        "normal-Width": ["700px"],
      },
      fontFamily: {
        "beth-ellen": ["Beth Ellen", "sans-serif"],
        "cinzel-decorative": ["Cinzel Decorative", "sans-serif"],
        "ca-bin": ["Cabin", "sans-serif"],
        "pop-pins": ["Poppins", "sans-serif"],
        "arimo-italic": ["Arimo", "sans-serif"],
        "mont-serrat": ["Montserrat", "sans-serif"],
        "mon-tez": ["Montez", "cursive"],
      },
      colors: {
        "select-text": "#EBBD00",
        "price-text": "#693B25",
        "pri-ce": "#BCA490",
      },
      backgroundImage: {
        "image-one": "url('/src/img/bg/bg-accueil.png')",
        "image-two": "url('/src/img/bg/bg_plat.png')",
        "image-third": "url('/src/img/bg/bg_Inscription.jpg')",
      },
    },
  },
  plugins: [],
};
