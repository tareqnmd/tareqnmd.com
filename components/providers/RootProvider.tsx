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
				{children}
				<Toaster />
			</StoreProvider>
		</ThemeProvider>
	);
};

export default RootProvider;
