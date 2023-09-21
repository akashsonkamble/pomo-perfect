import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className="bg-Rebeccapurple text-white flex justify-between justify-items-center p-9 max-w-9xl h-20 items-center box-border m-auto">
        <h1 className="font-bold text-4xl cursor-pointer" id='#'>PomoPerfect</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link className='font-bold decoration-none' to="/">Login</Link>
          </li>
          <li>
            <Link className='font-bold decoration-none' to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;