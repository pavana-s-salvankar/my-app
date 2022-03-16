import Link from 'next/link';
const ProductList = ({ productid = 100 }) => {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/product/1'>
        <a>Product 1</a>
      </Link>
      <Link href={`/product/${productid}`} replace>
        <a>Product {productid}</a>
      </Link>
    </>
  );
};
export default ProductList;
