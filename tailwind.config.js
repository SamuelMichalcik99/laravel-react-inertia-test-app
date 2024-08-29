import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Spartan', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                text: '#454545',
            },
            screens: {
                'desktop': {'max': '1535px'},
                // => @media (max-width: 1535px) { ... }

                'laptop': {'max': '1279px'},
                // => @media (max-width: 1279px) { ... }

                'tablet': {'max': '1023px'},
                // => @media (max-width: 1023px) { ... }

                'l-mobile': {'max': '767px'},
                // => @media (max-width: 767px) { ... }

                'm-mobile': {'max': '639px'},
                // => @media (max-width: 939px) { ... }

                's-mobile': {'max': '479px'},
                // => @media (max-width: 639px) { ... }
            },
        },
    },

    plugins: [forms],
};
