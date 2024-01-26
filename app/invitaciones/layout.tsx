import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Solicitud',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
}
