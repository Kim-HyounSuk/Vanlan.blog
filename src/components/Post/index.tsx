interface PostProps {
  content: string;
}

const Post = (props: PostProps) => {
  const { content } = props;

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};

export default Post;
