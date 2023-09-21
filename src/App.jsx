import Login from "./components/Login";
import Pomodoro from "./components/Pomodoro";
import Register from "./components/Register";
function App() {
  return (
    <>
      <Login />
      <Register />
      <section className="bg-Rebeccapurple text-white flex justify-between justify-items-center p-9 max-w-9xl h-20 items-center box-border m-auto">
        <h1 className="font-bold text-4xl">PomoPerfect</h1>
        <a className="text-2xl text-white" href="/logout">
          Logout
        </a>
      </section>

      <section className="justify-between justify-items-center p-4 max-w-4xl items-center box-border mx-auto">
        <Pomodoro />
      </section>
    </>
  );
}

export default App;
