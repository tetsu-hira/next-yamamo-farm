module.exports = {
  // 追記
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        beta: '10px 10px #ccc',
      },
      rotate: {
        150: '150deg',
        '-150': '-150deg',
      },
    },
    fontFamily: {
      body: [
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 2px 3px black',
        },
        '.text-shadow-md': {
          textShadow: '0px 3px 3px black',
        },
        '.text-shadow-lg': {
          textShadow: '0px 5px 3px black',
        },
        '.text-shadow-xl': {
          textShadow: '0px 7px 3px black',
        },
        '.text-shadow-2xl': {
          textShadow: '0px 10px 3px black',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
