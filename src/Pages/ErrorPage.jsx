import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white  p-8 rounded-lg  text-center my-10">
        <h1 className="text-4xl font-bold text-red-500 my-10">Error 404</h1>
        <p className="text-lg text-gray-800 my-4">
          Oops! The page you are looking for could not be found.
        </p>
        <Link href="/" className="mt-4 text-xs btn-sm btn btn-outline text-blue-500  my-4">
          Go  home 
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
