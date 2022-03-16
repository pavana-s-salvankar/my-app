import { useRouter } from 'next/router';
import UserComp from '../../../components/user';

const User = () => {
  const router = useRouter();
  const id = router.query.userid;
  return <UserComp userid={id} />;
};
export default User;
