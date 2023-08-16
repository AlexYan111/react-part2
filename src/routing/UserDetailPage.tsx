import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const pramas = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
