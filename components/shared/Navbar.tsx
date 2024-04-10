import Link from 'next/link';
import Logo from './Logo';
import ModeToggle from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="container flex items-center gap-4 lg:gap-6 justify-between py-4 lg:py-8">
			<Logo />
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
