const Loader = () => {
  return (
    <div className="h-[80vh] container mx-auto px-2 lg:px-20">
      <div className="flex h-[50vh]   justify-center">
        <span className="loading text-yellow-400 loading-infinity loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
