import Link from 'next/link';
const NewsList = ({ news }) => {
  return (
    <>
      <h1>news</h1>
      {news.map((item) => (
        <div key={item.id}>
          {/* <Link href={`/newss/${news.id}`}>
            <a>{`${news.id} ${news.title}`}</a>
          </Link> */}
          <h1>{`${item.id} ${item.title}`}</h1>
          <p>{`category:${item.category}`}</p>
          <hr />
        </div>
      ))}
    </>
  );
};
export default NewsList;
export const getServerSideProps = async () => {
  console.log(`Pre-rendering articles `);
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();
  return { props: { news: data } };
};
