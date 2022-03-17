import useSWR from 'swr';
const fetcher = async () => {
  const res = await fetch(`http://localhost:4000/dashboard`);
  const data = await res.json();
  return data;
};
const DashboardSwr = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) return 'An error occured';
  if (!data) return 'Loading';
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Posts--{data.posts}</h1>
      <h1>Followers--{data.followers}</h1>
      <h1>Following--{data.following}</h1>
    </>
  );
};
export default DashboardSwr;
