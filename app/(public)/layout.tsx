import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="app-screen page-screen">
			<Navbar />
			<div className="container">{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
