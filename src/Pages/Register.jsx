import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
  const { createUser,  } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  
  };
  return (
    <div className="container h-screen px-2 lg:px-20 mx-auto">
      <div className="   ">
        <div className="hero-content flex-col my-20">
          <h1 className="text-4xl uppercase font-bold text-green-800">
            Please Register !
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-green-800 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="User Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-outline text-red-500" type="submit">
                  Register
                </button>
              </div>
              <div className="flex py-2">
                <p className="text-white">Already have an account ?</p>

                <Link
                  to="/login"
                  className="btn btn-xs btn-link text-green-500"
                >
                  go to Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
