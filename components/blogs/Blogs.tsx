import BlogCard from './BlogCard';
import BlogTags from './BlogTags';

type blogsType = BlogType[];

export type BlogType = {
	id: number;
};

const Blogs = ({ blogs }: { blogs: blogsType }) => {
	return (
		<div>
			<BlogTags />
			<div className="grid grid-cols-2">
				{blogs.map((blog: BlogType) => (
					<BlogCard
						key={blog.id}
						blog={blog}
					/>
				))}
			</div>
		</div>
	);
};

export default Blogs;
