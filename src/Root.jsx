import { Outlet } from "react-router-dom";
import NavBar from "./Component/Header/NavBar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div className=" w-screen text-gray-300">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
