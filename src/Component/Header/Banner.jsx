const Banner = () => {
  return (
    <div className="py-4">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item flex flex-col relative w-full"
        >
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/jLKkHf0/In-Shot-20231007-002313973-min.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <h1 className="m-12 md:m-32 lg:m-32  text-4xl font-bold text-yellow-400">
              Coming Together Is A Beginning. Keeping Together Is Progress.
              </h1>
            </div>
          </div>
          <div className=" my-2   mx-auto ">
            <a
              href="#slide3"
              className="btn mx-2 btn-sm btn-outline text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn mx-2 btn-sm btn-outline text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col"
        >
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/j36kGBX/In-Shot-20231007-000924425-min.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <h1 className="m-12 md:m-32 lg:m-32 text-4xl font-bold text-yellow-400">
              Coming Together Is A Beginning. Keeping Together Is Progress.
              </h1>
            </div>
          </div>
          <div className="my-2 mx-auto ">
            <a
              href="#slide1"
              className="btn mx-2 btn-sm btn-outline text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn mx-2 btn-sm btn-outline text-white "
            >
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col"
        >
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/h9XcGdT/In-Shot-20231007-001005455-min.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <h1 className="m-12 md:m-32 lg:m-32 text-4xl font-bold text-yellow-400">
              Coming Together Is A Beginning. Keeping Together Is Progress.
              </h1>
            </div>
          </div>
          <div className="my-2 mx-auto ">
            <a
              href="#slide2"
              className="btn mx-2 btn-sm btn-outline text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn mx-2 btn-sm btn-outline text-white"
            >
              ❯
            </a>
          </div>
        </div>
        

        <div className="carousel-item relative w-full">
          <img src="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
