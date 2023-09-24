import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function MainNavigation() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;

  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <header className="bg-rebeccapurple text-white flex justify-between justify-items-center p-9 max-w-9xl h-20 items-center box-border m-auto">
      <h1 className="font-bold text-4xl">PomoPerfect</h1>
      <nav>
        <div className="flex gap-4">
          {isLoggedIn && (
            <button onClick={logOut}>
              <Link className="font-bold decoration-none">
                Logout
              </Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
