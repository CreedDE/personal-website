import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const post = await import(`../../../../posts/${slug}.md`);

		return {
			Content: post.default,
			meta: { ...post.metadata, slug }
		};
	} catch (error) {
		return {
			status: 404,
			error
		};
	}
};
