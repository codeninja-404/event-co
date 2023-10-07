import { Outlet } from "react-router-dom";
import NavBar from "./Component/Header/NavBar";

const Root = () => {
  return (
    <div className=" text-gray-400">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
