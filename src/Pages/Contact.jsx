import { BiArrowFromLeft, BiSolidPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
const Contact = () => {
  return (
    <div className="h-full container mx-auto px-2 lg:px-20">
      <div className="hero  min-h-screen pb-10  mb-20">
        <div className="flex flex-col  lg:flex-row w-full items-center justify-evenly lg:items-start">
          <div className="text-center lg:border-r lg:pr-44 flex my-5 flex-col lg:text-left">
            <div>
              <h1 className="text-5xl font-bold">Let's Talk</h1>
              <p className="py-6">Ask about anything or just say hi........</p>
            </div>
            <div className=" lg:pt-32">
              <div className="flex gap-4 py-2 justify-center lg:justify-start items-center">
                <BiSolidPhoneCall></BiSolidPhoneCall>
                <p>018XXXXXXXXX</p>
              </div>
              <div className="flex gap-4 py-2 justify-center lg:justify-start items-center">
                <MdMarkEmailRead></MdMarkEmailRead>
                <p>event_co@co.com</p>
              </div>
            </div>
          </div>
          <div className="  w-full h-full max-w-sm shadow-2xl ">
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className=" p-2 bg-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Messege"
                  className="bg-gray-900 h-32 p-2"
                  required
                />
              </div>
              <div className=" mt-6">
                <button className="btn btn-sm btn-outline btn-primary">
                  Submit <BiArrowFromLeft></BiArrowFromLeft>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
