import Link from 'next/link';
import Logo from './Logo';
import ModeToggle from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="container flex items-center justify-between py-4 lg:py-8">
			<Link href="/">
				<Logo />
			</Link>
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
