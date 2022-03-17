import Link from 'next/link';
const userList = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </>
  );
};
export default userList;
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return { props: { users: data } };
};
