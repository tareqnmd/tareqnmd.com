import RootProvider from '@/components/providers/RootProvider';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Md Tareq',
	description: 'Md Tareq',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn('font-sans antialiased', inter.className)}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
