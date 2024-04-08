'use client';

import RootError from '@/components/root/RootError';

export default function Error({ error, reset }) {
	return (
		<RootError
			error={error}
			reset={reset}
		/>
	);
}
