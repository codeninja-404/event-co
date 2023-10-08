import ServiceCard from "./ServiceCard";

const Service = ({ services }) => {
  return (
    <div  className=" container mx-auto">
      <div  className=" px-2 lg:px-20">
      <h2 className="text-3xl text-center text-fuchsia-400 border-b py-2">Our Servicees</h2>
      <div className="grid lg:grid-cols-2 gap-4 py-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Service;
