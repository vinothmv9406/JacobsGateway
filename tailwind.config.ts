
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/**
				 * Jacob's Gateway palette — lifted verbatim from the approved
				 * design mockup. Deep navy ink, porcelain paper, brass/gold
				 * accents, with emerald reserved for confirmation states.
				 */
				jg: {
					ink: '#0A1220',
					'ink-2': '#0F1C33',
					'ink-soft': '#4C5A6B',
					porcelain: '#F5F3EC',
					card: '#FFFFFF',
					'gold-light': '#F6DFB0',
					gold: '#CB8A46',
					'gold-deep': '#8B4E20',
					brass: '#EAD2A0',
					emerald: '#1F4A3D',
					'emerald-deep': '#123027',
					'emerald-soft': '#DCEAE3',
				},
				/**
				 * Legacy token names retained as aliases, repointed at
				 * the Jacob's Gateway palette. Kept as aliases so any class the
				 * re-skin missed still renders on-brand instead of purple.
				 * Prefer the `jg-*` tokens above in new work.
				 */
				crypto: {
					blue: '#0A1220',
					purple: '#CB8A46',
					'light-purple': '#F6DFB0',
					'dark-purple': '#8B4E20',
					accent: '#CB8A46',
				}
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				'xs': '0.125rem',   // 2px
				'sm': '0.25rem',    // 4px
				'md': '0.375rem',   // 6px
				'lg': '0.5rem',     // 8px
				'xl': '0.75rem',    // 12px
				'2xl': '1rem',      // 16px
				'3xl': '1.5rem',    // 24px
				'circle': '50%',    // perfect circle
				'pill': '9999px'    // pill-shaped
			  },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite', 
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
