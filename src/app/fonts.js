import { Cormorant, Manrope } from 'next/font/google'

export const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
})

export const cormorant = Cormorant({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-cormorant',
})

export const cormorantLightItalic = Cormorant({
	subsets: ['latin'],
	display: 'swap',
	weight: '300',
	style: 'italic',
	variable: '--font-cormorant-light-italic',
})
