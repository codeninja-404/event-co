import { Outlet } from "react-router-dom";
import NavBar from "./Component/Header/NavBar";

const Root = () => {
  return (
    <div className=" w-screen text-gray-300">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
