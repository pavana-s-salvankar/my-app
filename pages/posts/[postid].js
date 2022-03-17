const Post = ({ post }) => {
  return (
    <>
      <h1>{`${post.id} ${post.title}`}</h1>
      <p>{post.body}</p>
    </>
  );
};
export default Post;

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
  const data = await response.json();
  return { props: { post: data } };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { postid: '1' } },
      { params: { postid: '2' } },
      { params: { postid: '3' } },
      { params: { postid: '4' } },
      { params: { postid: '5' } },
    ],
    fallback: false,
  };
};
