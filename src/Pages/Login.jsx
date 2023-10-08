import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logIn, logInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then()
      .catch((err) => console.log(err.message));
  };
  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="container h-screen px-2 lg:px-20 mx-auto">
      <div className="   ">
        <div className="hero-content flex-col my-20">
          <h1 className="text-4xl font-bold uppercase text-green-800">
            Please LogIn !
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-green-800 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-outline text-green-500"
                  type="submit"
                >
                  LOG IN
                </button>
                <Link
                  onClick={handleGoogleLogIn}
                  className="flex items-center btn my-2 btn-outline text-yellow-500"
                >
                  <FcGoogle></FcGoogle>
                  LOG IN WITH GOOGLE
                </Link>
              </div>
              <div className="flex py-2">
                <p className="text-white">New here ?</p>

                <Link
                  to="/register"
                  className="btn btn-xs btn-link text-red-500"
                >
                  go to register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
