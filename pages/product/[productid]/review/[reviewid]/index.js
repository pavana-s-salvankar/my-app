import { useRouter } from 'next/router';
const ReviewDetail = () => {
  const router = useRouter();
  const { productid, reviewid } = router.query;
  return <h1>{`I am review ${reviewid} of product ${productid}`}</h1>;
};
export default ReviewDetail;
