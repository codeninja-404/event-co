import { Outlet } from "react-router-dom";
import NavBar from "./Component/Header/NavBar";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className=" w-screen text-gray-300">
      <Toaster  toastOptions={{
    
    style: {
      background:"#183D3D" ,
      color: '#fff',
    },
  }}/>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
