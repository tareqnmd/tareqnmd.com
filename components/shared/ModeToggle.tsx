'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { useLayoutEffect } from 'react';

const ModeToggle = () => {
	const { theme, setTheme } = useTheme();

	useLayoutEffect(() => {
		setTheme('dark');
	}, [setTheme]);

	return theme === 'dark' ? (
		<Button
			className="!bg-transparent w-auto h-auto"
			size="icon"
			onClick={() => setTheme('light')}
		>
			<Sun className="text-white" />
		</Button>
	) : (
		<Button
			className="!bg-transparent w-auto h-auto"
			size="icon"
			onClick={() => setTheme('dark')}
		>
			<Moon className="text-black" />
		</Button>
	);
};

export default ModeToggle;
