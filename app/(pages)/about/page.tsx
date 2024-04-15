import About from '@/components/about/About';
const getAboutInfo = async () => {
	return {};
};

const Page = async () => {
	const about = await getAboutInfo();
	return <About about={about} />;
};

export default Page;
