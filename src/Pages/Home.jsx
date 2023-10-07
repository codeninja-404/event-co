import { useLoaderData } from "react-router-dom";
import Aboutus from "../Component/Body/Aboutus";
import Service from "../Component/Body/Service";
import Banner from "../Component/Header/Banner";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Aboutus></Aboutus>
      <Service services={services}></Service>
    </div>
  );
};

export default Home;
