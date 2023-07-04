/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-color-blue': '#141b2d',
                'primary-color-rose': '#be123c',
            },
        },

        fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
};
