import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Escoja',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<>{children}</>
		</>
	);
}
