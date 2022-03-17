import { useRouter } from 'next/router';
const Item = ({ item }) => {
  const router = useRouter();
  //   if (router.isFallback) {
  //     return <h1>Loading...</h1>;
  //   }
  return (
    <>
      <h1>{`${item.id} ${item.title}`}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </>
  );
};
export default Item;

export const getStaticProps = async (context) => {
  console.log('regenerating...');
  const { params } = context;
  const response = await fetch(`http://localhost:4000/items/${params.itemid}`);
  const data = await response.json();
  if (!data.id) {
    return { notFound: true };
  }
  return { props: { item: data }, revalidate: 5 };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { itemid: '1' } }],
    fallback: 'blocking',
  };
};
