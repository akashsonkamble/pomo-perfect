import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className="text-rebeccapurple m-auto my-40 text-center">
        <h1 className="font-bold text-4xl">An error occurred!</h1>
        <p className="text-2xl">Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
