import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container h-screen px-2 lg:px-20 mx-auto">
      <div className="   ">
        <div className="hero-content">
          <div className="  w-full max-w-lg  border rounded-xl  shadow-zinc-800 shadow-2xl">
            <form className="card-body">
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
                <Link className="btn btn-outline text-green-500">Login</Link>
              </div>
              <div className="flex py-2">
                <p className="text-white">New here ?</p>

                <Link
                  to="/register"
                  className="btn btn-xs btn-link text-red-500"
                >
                  <button type="submit">Go to register</button>
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
