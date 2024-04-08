import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="container flex gap-4 items-center justify-end py-4 lg:py-8">
			<Link
				target="_blank"
				href="https://www.linkedin.com/in/tareqnmd/"
			>
				<Linkedin />
			</Link>
			<Link
				target="_blank"
				href="https://github.com/tareqnmd"
			>
				<Github />
			</Link>
		</footer>
	);
};

export default Footer;
