import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Impresiones-Web',
	description: 'Pagina web para reservar impresiones en la Habana, Cuba y comprar invitaciones',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['impresiones', 'invitaciones', 'reservar impresiones', 'Cuba'],
	themeColor: [{ media: '(prefers-color-scheme: light)', color: '#fff' }],
	authors: [
		{ name: 'Bryan Espinosa' },
		{
			name: 'Bryan Espinosa',
		},
	],
	viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
	icons: [
		{ rel: 'apple-touch-icon', url: '/public/icons/impresiora 64x64.png' },
		{ rel: 'icon', url: '/public/icons/impresiora 180x180.png' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
