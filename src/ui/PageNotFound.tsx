import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Link to="/">Back to Home</Link>
      <h1 className="flex items-center justify-center">Page Not Found</h1>
    </>
  );
}
