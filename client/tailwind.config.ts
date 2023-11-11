import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs:"460px",
      md: "768px",
      lg: "976px",    
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        'regal-purple': 'linear-gradient(90deg, #7214FF 0.09%, rgba(222, 204, 255, 0.70) 153.16%)',
      },

      boxShadow: {
        navshadow: ' 0px 3px 16px 0px rgba(0, 0, 0, 0.25)',
        elementShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 6px 6px 0px rgba(0, 0, 0, 0.09), 0px 14px 8px 0px rgba(0, 0, 0, 0.05), 0px 24px 10px 0px rgba(0, 0, 0, 0.01), 0px 38px 11px 0px rgba(0, 0, 0, 0.00)',
        listBoxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 9px 5px 0px rgba(0, 0, 0, 0.02), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 24px 7px 0px rgba(0, 0, 0, 0.00)'
      },

      colors:{
        visaBlue:'#7214FF',
        visaGrey:'rgba(122, 117, 127, 0.40)'
      }

    },
  },
  plugins: [],
}
export default config
