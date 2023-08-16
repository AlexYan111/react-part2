import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const pramas = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User {pramas.id}</p>;
};

export default UserDetail;
