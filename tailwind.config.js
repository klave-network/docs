import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './content/**/*.{md,mdx}',
        './mdx-components.{ts,tsx}',
        './node_modules/fumadocs-ui/dist/**/*.js',
        './utils/**/*.{ts,tsx}'
    ],
    presets: [createPreset()],
    plugins: [require('tailwindcss-animate')],
    theme: {
        extend: {
            fontFamily: {
                owners: ['owners']
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(circle, var(--tw-gradient-stops))',
                'repeat-gradient-to-r':
                    'repeating-linear-gradient(to right, var(--tw-gradient-stops))',
                'repeat-gradient-to-br':
                    'repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))',
                'cta-gradient':
                    'radial-gradient(ellipse 50% 50% at right, rgba(0,191,255,0.3), transparent)'
            },
            colors: {
                'klave-blue': '#00BFFF',
                'klave-strong-blue': '#007fff',
                'klave-teal': '#00FFD5',
                'klave-strong-teal': '#00b395',
                'klave-peach': '#FCA870',
                'klave-purple': '#B291ED',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))'
                }
            }
        }
    }
};
