import { Metadata } from 'next';
import { Container } from 'react-bootstrap';

export const metadata: Metadata = {
	title: 'Invitaciones',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<>{children}</>
		</>
	);
}
