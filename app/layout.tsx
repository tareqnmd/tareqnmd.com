import RootProvider from '@/components/providers/RootProvider';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Tilt_Neon as FontSans } from 'next/font/google';

export const fontSans = FontSans({
	weight: ['400'],
	subsets: ['latin'],
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
			<body className={cn('antialiased', fontSans.className)}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
