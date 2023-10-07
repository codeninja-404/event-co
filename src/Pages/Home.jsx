import { useLoaderData } from "react-router-dom";
import Aboutus from "../Component/Body/Aboutus";
import Service from "../Component/Body/Service";
import Banner from "../Component/Header/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <Service services={services}></Service>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
  );
};

export default Home;
