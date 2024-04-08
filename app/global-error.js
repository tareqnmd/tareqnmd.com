'use client';

import RootGlobalError from '@/components/root/RootGlobalError';

export default function Error({ error, reset }) {
	return (
		<RootGlobalError
			error={error}
			reset={reset}
		/>
	);
}
