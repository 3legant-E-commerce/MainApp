import { Link, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/">Back to Home</Link>
      <h1 className="flex items-center justify-center">Page Not Found</h1>
    </>
  );
}
