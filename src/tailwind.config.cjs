const colors = require('tailwindcss/colors')

const heading = (theme) => ({
  fontWeight: theme('fontWeight.bold'),
  marginBottom: theme('margin.1'),
  marginTop: theme('margin.4'),
  // set overflow truncate/ellipsis in the surrounding container, or larger fonts will be cut off due to their line-heights
})

const gray = colors.gray // or slate, zinc, neutral, stone

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}', // Does not work with i18n as of 2022-12-01
    './app.vue',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    ({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        // '@font-face': {
        //   fontDisplay: 'swap',
        //   fontFamily: 'Montserrat',
        //   src:
        //     "local('Montserrat Medium'), local('Montserrat-Medium'), url(/assets/static/fonts/montserrat/montserrat-medium.woff2) format('woff2')",
        //   unicodeRange:
        //     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
        // },
        ':disabled': {
          cursor: theme('cursor.not-allowed'),
          opacity: theme('opacity.50'),
        },
        'a[target="_blank"]:after': {
          backgroundColor: 'currentColor',
          content: '""',
          display: 'inline-table', // inline-table centers the element vertically in the tiptap text area, instead of inline-block
          mask: 'url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhcnJvdy11cC1yaWdodC1mcm9tLXNxdWFyZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTM4NCAzMjBjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2OTZINjRWMTYwaDk2YzE3LjY3IDAgMzItMTQuMzIgMzItMzJzLTE0LjMzLTMyLTMyLTMyTDY0IDk2Yy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0VjQ0OGMwIDM1LjM0IDI4LjY1IDY0IDY0IDY0aDI4OGMzNS4zNSAwIDY0LTI4LjY2IDY0LTY0di05NkM0MTYgMzM0LjMgNDAxLjcgMzIwIDM4NCAzMjB6TTUwMi42IDkuMzY3QzQ5Ni44IDMuNTc4IDQ4OC44IDAgNDgwIDBoLTE2MGMtMTcuNjcgMC0zMS4xIDE0LjMyLTMxLjEgMzEuMWMwIDE3LjY3IDE0LjMyIDMxLjEgMzEuOTkgMzEuMWg4Mi43NUwxNzguNyAyOTAuN2MtMTIuNSAxMi41LTEyLjUgMzIuNzYgMCA0NS4yNkMxOTEuMiAzNDguNSAyMTEuNSAzNDguNSAyMjQgMzM2bDIyNC0yMjYuOFYxOTJjMCAxNy42NyAxNC4zMyAzMS4xIDMxLjEgMzEuMVM1MTIgMjA5LjcgNTEyIDE5MlYzMS4xQzUxMiAyMy4xNiA1MDguNCAxNS4xNiA1MDIuNiA5LjM2N3oiPjwvcGF0aD48L3N2Zz4K) no-repeat 50% 50%',
          maskSize: 'cover',
          height: theme('fontSize.xs'),
          marginLeft: '5px',
          width: theme('fontSize.xs'),
        },
        // a: {
        //   color: theme('colors.blue.700'),
        //   display: 'inline-block',
        //   '&[target="_blank"]': {
        //     '&:after': {
        //       backgroundColor: theme('colors.gray.900'),
        //       content: '""',
        //       display: 'inline-block',
        //       mask: 'url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJleHRlcm5hbC1saW5rLWFsdCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstYWx0IGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDMyLDMyMEg0MDBhMTYsMTYsMCwwLDAtMTYsMTZWNDQ4SDY0VjEyOEgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWODBhMTYsMTYsMCwwLDAtMTYtMTZINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDY0YTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQwMGE0OCw0OCwwLDAsMCw0OC00OFYzMzZBMTYsMTYsMCwwLDAsNDMyLDMyMFpNNDg4LDBoLTEyOGMtMjEuMzcsMC0zMi4wNSwyNS45MS0xNyw0MWwzNS43MywzNS43M0wxMzUsMzIwLjM3YTI0LDI0LDAsMCwwLDAsMzRMMTU3LjY3LDM3N2EyNCwyNCwwLDAsMCwzNCwwTDQzNS4yOCwxMzMuMzIsNDcxLDE2OWMxNSwxNSw0MSw0LjUsNDEtMTdWMjRBMjQsMjQsMCwwLDAsNDg4LDBaIj48L3BhdGg+PC9zdmc+) no-repeat 50% 50%',
        //       maskSize: 'cover',
        //       height: theme('fontSize.xs'),
        //       width: theme('fontSize.xs'),
        //       // '@screen dark-mode': {
        //       //   backgroundColor: 'currentColor',
        //       // },
        //     },
        //     '&.button': {
        //       '&:after': {
        //         backgroundColor: theme('colors.white'),
        //         // '@screen dark-mode': {
        //         //   backgroundColor: theme('colors.gray.900'),
        //         // },
        //       },
        //       '.card &': {
        //         '&:after': {
        //           backgroundColor: theme('colors.gray.900'),
        //           // '@screen dark-mode': {
        //           //   backgroundColor: theme('colors.white'),
        //           // },
        //         },
        //       },
        //     },
        //   },
        //   // '@screen dark-mode': {
        //   //   color: theme('colors.blue.400'),
        //   // },
        // },
        address: {
          margin: theme('margin.4'),
        },
        // body: {
        //   background: '#f0f0f0',
        //   // '@screen dark-mode': {
        //   //   background: '#161616',
        //   // },
        // },
        // footer: {
        //   background: '#ffffff',
        //   // '@screen dark-mode': {
        //   //   background: '#1e1e1e',
        //   // },
        // },
        h1: {
          ...heading(theme),
          fontSize: theme('fontSize.4xl'),
          marginBottom: theme('margin.4'),
          textAlign: 'center',
        },
        h2: {
          ...heading(theme),
          fontSize: theme('fontSize.3xl'),
        },
        h3: {
          ...heading(theme),
          fontSize: theme('fontSize.2xl'),
        },
        h4: {
          ...heading(theme),
          fontSize: theme('fontSize.xl'),
        },
        img: {
          '&::before': {
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          },
        },
        // p: {
        //   margin: theme('margin.4'),
        // },
        table: {
          width: '100%',
        },
        td: {
          padding: theme('padding.4') + ' ' + theme('padding.6'),
          whiteSpace: 'nowrap',
        },
        th: {
          padding: theme('padding.3') + ' ' + theme('padding.6'),
          textAlign: 'left',
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.medium'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wider'),
        },
      })
      addComponents({
        '::placeholder': {
          fontStyle: 'italic',
          '.form-input&,.form-textarea&': {
            opacity: 0.5,
          },
        },
        // '.alert': {
        //   backgroundColor: theme('colors.red.700'),
        //   borderRadius: theme('borderRadius.default'),
        //   color: theme('colors.white'),
        //   padding: theme('padding.3'),
        //   textAlign: 'center',
        // },
        // '.button': {
        //   backgroundColor: theme('colors.gray.900'),
        //   borderRadius: theme('borderRadius.full'),
        //   boxShadow: theme('boxShadow.default'),
        //   color: theme('colors.gray.100'),
        //   fontWeight: theme('fontWeight.bold'),
        //   padding: theme('padding.2') + ' ' + theme('padding.4'),
        //   // '@screen dark-mode': {
        //   //   backgroundColor: theme('colors.white'),
        //   //   color: theme('colors.gray.900'),
        //   // },
        //   '&:focus': {
        //     boxShadow: theme('boxShadow.outline'),
        //   },
        //   '&:hover': {
        //     backgroundColor: theme('colors.gray.800'),
        //     // '@screen dark-mode': {
        //     //   backgroundColor: theme('colors.gray.400'),
        //     // },
        //   },
        // },
        // '.card': {
        //   backgroundColor: 'white',
        //   borderRadius: theme('borderRadius.default'),
        //   boxShadow: theme('boxShadow.md'),
        //   color: theme('colors.black'),
        //   padding: theme('padding.4'),
        //   form: {
        //     label: {
        //       color: theme('colors.gray.600'),
        //     },
        //   },
        //   '.button': {
        //     backgroundColor: theme('colors.gray.900'),
        //     color: theme('colors.gray.100'),
        //     '&:hover': {
        //       backgroundColor: theme('colors.gray.800'),
        //     },
        //   },
        // },
        // '.colorInverse': {
        //   color: 'initial',
        //   // '@screen dark-mode': {
        //   //   color: 'white',
        //   // },
        // },
        // '.dropdown-content': {
        //   display: 'none',
        //   '>*': {
        //     display: 'block',
        //   },
        // },
        // '.dropdown': {
        //   '&:hover': {
        //     '.dropdown-content': {
        //       display: 'block',
        //     },
        //   },
        // },
        // '.flip-card': {
        //   perspective: '1000px',
        // },
        // '.flip-card-inner': {
        //   transition: 'transform 0.7s',
        //   transformStyle: 'preserve-3d',
        // },
        // '.flip-card.flipped .flip-card-inner': {
        //   transform: 'rotateY(180deg)',
        // },
        // '.flip-card-front, .flip-card-back': {
        //   backfaceVisibility: 'hidden',
        // },
        // '.flip-card-front': {
        //   transform: 'rotateY(-180deg)',
        // },
        // '.flip-card-back': {
        //   transform: 'rotateY(0deg)',
        // },
        '.form-input': {
          appearance: 'none',
          backgroundColor: theme('colors.gray.50'),
          borderColor: theme('colors.gray.300'),
          borderRadius: theme('borderRadius.DEFAULT'),
          borderWidth: theme('borderWidth.DEFAULT'),
          boxShadow: theme('boxShadow.sm'),
          color: theme('colors.text.dark'),
          lineHeight: theme('lineHeight.tight'),
          padding: theme('padding.2') + ' ' + theme('padding.4'),
          width: theme('width.full'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },
        },
        '.form-input-error': {
          input: {
            borderColor: theme('colors.red.500'),
          },
        },
        '.form-input-success': {
          input: {
            borderColor: theme('colors.green.600'),
          },
        },
        '.form-input-warning': {
          input: {
            borderColor: theme('colors.yellow.600'),
          },
        },
        // '.info': {
        //   backgroundColor: theme('colors.blue.700'),
        //   borderRadius: theme('borderRadius.default'),
        //   color: theme('colors.white'),
        //   padding: theme('padding.3'),
        //   textAlign: 'center',
        // },
        // '.pills': {
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   li: {
        //     width: theme('width.full'),
        //     button: {
        //       fontWeight: theme('fontWeight.semibold'),
        //       padding: theme('padding.2') + ' ' + theme('padding.4'),
        //       width: theme('width.full'),
        //     },
        //   },
        // },
        // '.prose': {
        //   ol: {
        //     listStylePosition: 'inside',
        //     listStyleType: 'decimal',
        //   },
        //   textAlign: 'left',
        //   ul: {
        //     listStylePosition: 'inside',
        //     listStyleType: 'disc',
        //   },
        // },
        // '.unready': {
        //   backgroundColor: theme('colors.orange.700'),
        //   borderRadius: theme('borderRadius.default'),
        //   color: theme('colors.white'),
        //   padding: theme('padding.3'),
        //   textAlign: 'center',
        // },
      })
      addUtilities({
        '.disabled': {
          cursor: theme('cursor.not-allowed'),
          opacity: theme('opacity.50'),
        },
        // '.bg-half-transparent': {
        //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // },
        // '.e1': {
        //   gridRow: '1',
        //   gridColumn: '1',
        // },
        // '.inline-grid': {
        //   display: 'inline-grid',
        // },
        // '.line-clamp-box': {
        //   display: '-webkit-box',
        //   overflow: 'hidden',
        //   textOverflow: 'ellipsis',
        //   '-webkit-box-orient': 'vertical',
        // },
        // '.line-clamp-2': {
        //   '-webkit-line-clamp': '2',
        // },
      })
    },
  ],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.6s ease-in-out 0s 1 normal forwards running',
      },
      colors: {
        background: {
          bright: colors.white,
          brighten: gray['200'],
          dark: '#161616',
          darken: gray['700'],
        },
        link: {
          bright: colors.blue['400'],
          dark: colors.blue['600'],
        },
        text: {
          bright: gray['50'],
          dark: gray['900'],
        },
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '15%': {
            transform: 'translateX(0.375rem)',
          },
          '30%': {
            transform: 'translateX(-0.375rem)',
          },
          '45%': {
            transform: 'translateX(0.375rem)',
          },
          '60%': {
            transform: 'translateX(-0.375rem)',
          },
          '75%': {
            transform: 'translateX(0.375rem)',
          },
          '90%': {
            transform: 'translateX(-0.375rem)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
}
