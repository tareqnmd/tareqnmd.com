import Logo from './Logo';
import ModeToggle from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="container flex items-center justify-between py-4 lg:py-8">
			<Logo />
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
