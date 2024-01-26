import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Impresiones-Web',
	description: 'Pagina web para reservar impresiones en la Habana, Cuba y comprar invitaciones',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
	themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
	authors: [
		{ name: 'Rajesh Prajapati' },
		{
			name: 'Rajesh Prajapati',
			url: 'https://www.linkedin.com/in/raazeshp96/',
		},
	],
	viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
	icons: [
		{ rel: 'apple-touch-icon', url: 'icons/impresiora 64x64.png' },
		{ rel: 'icon', url: 'icons/impresiora 180x180.png' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
