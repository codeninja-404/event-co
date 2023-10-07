import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="container  mx-auto py-10 px-2 lg:px-20 ">
      <form data-aos="fade-right" data-aos-duration="1000">
        <div className="text-center py-5">
          <h1 className="text-yellow-400 text-3xl font-bold border-b pb-2">
            GET 10% OFF
          </h1>
          <p className="py-2">
            Subcribe now and get promotion for your first order.
          </p>
        </div>
        <div className="lg:w-3/5 mx-auto">
          <input
            className="input input-bordered w-full   "
            placeholder="Your Email"
          />
        </div>
        <div className="text-center pt-5">
          <Link className="btn rounded-xl btn-outline text-green-500">
            Subscribe
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
