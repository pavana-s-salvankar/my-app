import Link from 'next/link';
const PostList = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{`${post.id} ${post.title}`}</a>
          </Link>
        </div>
      ))}
    </>
  );
};
export default PostList;
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return { props: { posts: data.slice(0, 5) } };
};
