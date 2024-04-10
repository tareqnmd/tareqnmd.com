import Link from 'next/link';
import Logo from './Logo';
import ModeToggle from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="container flex items-center justify-between gap-4 lg:gap-6 py-4 lg:py-8">
			<Link href="/">
				<Logo />
			</Link>
			<Link
				className="ml-auto"
				href="/about"
			>
				about
			</Link>
			<Link href="/blogs">blogs</Link>
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
