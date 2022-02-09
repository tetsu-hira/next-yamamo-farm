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
  plugins: [],
};
