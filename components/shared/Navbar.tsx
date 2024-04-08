import ModeToggle from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="container flex items-center justify-end py-4 lg:py-8">
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
