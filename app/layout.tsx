import RootProvider from '@/components/providers/RootProvider';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

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
			<body className={cn('font-sans antialiased', fontSans.variable)}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
