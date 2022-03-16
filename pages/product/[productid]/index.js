import { useRouter } from 'next/router';
const ProductDetail = () => {
  const handleClick = () => {
    console.log('succesfully placed order');
    //router.push('/product');
    router.replace(`/blog`);
  };
  const router = useRouter();
  const productid = router.query.productid;
  return (
    <>
      <h1>{`I am product ${productid}`}</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};
export default ProductDetail;
