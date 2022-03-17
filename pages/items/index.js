import Link from 'next/link';
const ItemList = ({ items }) => {
  return (
    <>
      <h1>items</h1>
      {items.map((item) => (
        <div key={item.id}>
          {/* <Link href={`/items/${item.id}`}>
            <a>{`${item.id} ${item.title}`}</a>
          </Link> */}
          <h1>{`${item.id} ${item.title} ${item.price}`}</h1>
          <hr />
        </div>
      ))}
    </>
  );
};
export default ItemList;
export const getStaticProps = async () => {
    console.log("regenerating...");
  const response = await fetch('http://localhost:4000/items');
  const data = await response.json();
  return { props: { items: data }, revalidate: 5 };
};
