import BlogDetails from '@/components/blogs/BlogDetails';

const getBlogDetails = async () => {
	return { id: 1 };
};

const Page = async () => {
	const blog = await getBlogDetails();
	return <BlogDetails blog={blog} />;
};

export default Page;
