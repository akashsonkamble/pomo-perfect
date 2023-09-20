import Pomodoro from "./components/Pomodoro";
function App() {
  return (
    <>
      <section className="bg-primary text-rebeccapurple flex justify-between justify-items-center p-4 max-w-4xl items-center box-border m-auto mb-10">
        <h1 className="font-bold text-2xl">PomoPerfect</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            className=""
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </section>

      <section className="justify-between justify-items-center p-4 max-w-4xl items-center box-border my-10 mx-auto">
        <Pomodoro />
      </section>
    </>
  );
}

export default App;
