import { Toaster } from '@/components/ui/sonner';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<StoreProvider>
				<main className="app-content">
					<Navbar />
					<div className="page-content">{children}</div>
					<Footer />
				</main>
				<Toaster />
			</StoreProvider>
		</ThemeProvider>
	);
};

export default RootProvider;
