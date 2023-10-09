import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const { id } = useParams();
  const services = useLoaderData();
  const { name, description, image_url, price } = serviceDetails;
  useEffect(() => {
    const details = services.find((service) => service.id == id);
    setServiceDetails(details);
  }, []);
  return (
   <div className=" h-full  bg-black container mx-auto">
     <div data-aos="flip-down" className=" bg-black px-2 lg:px-20 ">
        <h2 className="text-center text-yellow-500 font-bold text-4xl py-5">{name} details</h2>
      <div className="w-full md:w-4/6 lg:w-4/6 mx-auto">
        <div className="card  shadow-xl image-full">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            
            <p className="md:text-xl lg:text-xl text-gray-300">{description}</p>
            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn btn-sm btn-outline text-yellow-500 mx-auto"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6"></div>
    </div>
   </div>
  );
};

export default Details;
