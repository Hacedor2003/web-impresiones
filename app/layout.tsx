import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { Viewport } from 'next';
import { NavBar } from './UI/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Impresiones-Web',
	description: 'Pagina web para reservar impresiones en la Habana, Cuba y comprar invitaciones',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['impresiones', 'invitaciones', 'reservar impresiones', 'Cuba'],
	authors: [
		{ name: 'Bryan Espinosa' },
		{
			name: 'Bryan Espinosa',
		},
	],
	icons: [
		{ rel: 'apple-touch-icon', url: '/public/icons/impresiora 64x64.png' },
		{ rel: 'icon', url: '/public/icons/impresiora 180x180.png' },
	],
};
export const viewport: Viewport = {
	themeColor: 'black',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<NavBar>{children}</NavBar>
			</body>
		</html>
	);
}
