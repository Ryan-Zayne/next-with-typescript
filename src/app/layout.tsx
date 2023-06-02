import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const nosy = 5000;

export const metadata = {
	title: 'Next.js and TypeScript example',
	description: 'Testing Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
