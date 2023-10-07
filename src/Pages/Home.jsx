import { useLoaderData } from "react-router-dom";
import Aboutus from "../Component/Body/Aboutus";
import Service from "../Component/Body/Service";
import Banner from "../Component/Header/Banner";
import Footer from "../Footer/Footer";
import Newsletter from "../Component/Body/Newsletter";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <Service services={services}></Service>
      <Aboutus></Aboutus>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
