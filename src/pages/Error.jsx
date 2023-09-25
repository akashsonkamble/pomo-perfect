import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="text-rebeccapurple m-auto my-40 text-center">
      <h1 className="font-bold text-6xl py-4">An error occurred!</h1>
      <p className="text-3xl my-10">Could not find this page!</p>
      <Link
        to="/login"
        className="font-bold decoration-none my-10 py-2 px-4 border rounded-3xl hover:bg-rebeccapurple hover:text-white active:bg-rebeccapurple active:text-white focus:outline-none"
      >
        Back to Login
      </Link>
    </main>
  );
}

export default ErrorPage;
