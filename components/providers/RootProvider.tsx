import { Toaster } from '@/components/ui/sonner';
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
				<div id="organizer">{children}</div>
				<Toaster />
			</StoreProvider>
		</ThemeProvider>
	);
};

export default RootProvider;
