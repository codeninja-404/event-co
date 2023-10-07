import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, description, image_url, price } = service;
  return (
    <div className="pb-5 ">
      <div className="  bg-black  shadow-xl">
        <div className="p-4">
          <h2 className="card-title">{name}</h2>
          <p>
            {description.slice(0, 200)}...{" "}
            <Link className="mx-auto btn text-green-400 btn-xs btn-outline"> Read More </Link>
          </p>
        </div>
        <figure>
          <img src={image_url} />
        </figure>
      </div>
    </div>
  );
};

export default ServiceCard;
