import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, description, image_url, price } = service;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="pb-5 ">
      <div className="  mx-auto  bg-black  shadow-xl">
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-1">
          <div className="p-4">
            <h2 className="card-title text-2xl font-bold text-yellow-400">
              {name}
            </h2>
            <p className="text-red-300">৳ {price} </p>
            <p>
              {description.slice(0, 150)}...{" "}
              <Link
                to={`/details/${id}`}
                className="mx-auto btn text-green-400 btn-xs btn-outline"
              >
                Show Details
              </Link>
            </p>
          </div>
          <figure>
            <img className="rounded-xl" src={image_url} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
