export const get_posts = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../posts/**/*.md')).map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      const slug = path?.split('/').pop()?.slice(0, -3) ?? null;

      return { ...metadata, slug };
    })
  );

  let sortedPosts = posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  sortedPosts = sortedPosts.map((post) => ({ ...post }));

  return {
    posts: sortedPosts
  };
};
