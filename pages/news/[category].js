const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>{`Showing news for category ${category}`}</h1>
      {articles.map((item) => (
        <div key={item.id}>
          <h1>{`${item.id} ${item.title}`}</h1>
          <p>{`category:${item.category}`}</p>
          <hr />
        </div>
      ))}
    </>
  );
};
export default ArticleListByCategory;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
console.log(`Pre-rendering articles for category ${category}`);
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();
  return { props: { articles: data, category } };
};
