import Link from 'next/link';

const Home = () => {
	return (
		<div className="h-full grid place-content-center">
			<div className="h-full grid gap-1">
				<h3>
					The site is currently under construction, but it will be relaunching
					soon.
				</h3>
				<ul className="flex item-center justify-center gap-2">
					<li className="underline">
						<Link href="https://www.linkedin.com/in/tareqnmd/">Linkedin</Link>
					</li>
					<li className="underline">
						<Link href="https://github.com/tareqnmd">Github</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
