/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['src/**/*.{html,ts}'],
    theme: {
        colors: {
            gunmetal: '#2d333d',
            charcoal: '#464c59',
            paynesGray: '#69707d',
            ghostWhite: '#fffaff',
            bitterSweet: '#ff5858',
            aquamarine: '#4ce0b3',
            success: '#42ba96',
            error: '#ff4444',
        },
        fontWeight: {
            thin: '100',
            light: '300',
            regular: '400',
            bold: '700',
        },
        extend: {
            fontFamily: {
                lato: ['"Lato"', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                heartbeat: {
                    '0%, 40%, 80%, 100%': { transform: 'scale(1)' },
                    '20%, 60%': { transform: 'scale(1.1)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn .2s ease-in-out',
                fadeOut: 'fadeOut .2s ease-in-out',
                blink: 'blink .75s linear infinite',
                heartbeat: 'heartbeat 1s ease-in infinite',
            },
        },
    },
    plugins: [],
}
