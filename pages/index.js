import Link from 'next/link';
import { useRouter } from 'next/router';
const Home = () => {
  const router = useRouter();
  return (
    <>
      <h1>Welcome to home Page</h1>
      <Link href='/blog'>
        <a>Blog </a>
      </Link>
      <Link href='/about'>
        <a>About </a>
      </Link>
      <Link href='/docs'>
        <a>Docs </a>
      </Link>
      <Link href='/product'>
        <a>Products </a>
      </Link>
      <Link href='/users'>
        <a>Users </a>
      </Link>
      <Link href='/posts'>
        <a>Posts </a>
      </Link>
      <Link href='/items'>
        <a>Items </a>
      </Link>
      <Link href='/news'>
        <a>News </a>
      </Link>
    </>
  );
};
export default Home;
