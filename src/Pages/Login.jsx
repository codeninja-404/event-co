import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="container h-screen px-2 lg:px-20 mx-auto">
      <div className="   ">
        <div className="hero-content flex-col my-20">
          <h1 className="text-4xl font-bold uppercase text-green-800">Please LogIn !</h1>
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
