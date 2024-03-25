import type { Metadata } from 'next';
import { Poppins, DM_Sans, Kameron } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/pagination';

import './assets/fonts/style.css';
import './globals.css';

const poppin = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });
const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });
const kameron = Kameron({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Ginga Brasil',
	description: 'Landing Page Ginga Brasil',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt_BR">
			<body className={(dm.className, poppin.className)}>{children}</body>
		</html>
	);
}
