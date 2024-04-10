import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Tareq',
		short_name: 'Tareq',
		description: 'Md Tareq',
		start_url: '/',
		display: 'standalone',
		background_color: '#0f172a',
		theme_color: '#0f172a',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: '/favicon-16x16.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
	};
}
