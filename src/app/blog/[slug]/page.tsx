import { getPageBySlug, getPageContent, notionClient } from '@utils/notion';
import { notFound } from 'next/navigation';
import { NotionRenderer } from '@notion-render/client';
import Post from '@components/Post';

// Plug-in
import hljsPlugin from '@notion-render/hljs-plugin';
import bookmarkPlugin from '@notion-render/bookmark-plugin';

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log('Slug: ', params);
  const post = await getPageBySlug(params.slug);

  // Not found page
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  console.log('Post :', post);
  console.log('Html :', html);

  return <Post content={html} />;
};

export default Page;
