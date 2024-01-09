import getBlogPosts from '@lib/notion/notion';

export default async function Home() {
  const posts = await getBlogPosts();

  console.log(posts);

  return (
    <div>
      <h1>Home</h1>
      <div></div>
    </div>
  );
}
