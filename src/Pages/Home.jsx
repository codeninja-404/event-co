import { useLoaderData } from "react-router-dom";
import Aboutus from "../Component/Body/Aboutus";
import Service from "../Component/Body/Service";
import Banner from "../Component/Header/Banner";

import Newsletter from "../Component/Body/Newsletter";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <div>
        <Aboutus></Aboutus>
        <Service services={services}></Service>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
