import ServiceCard from "./ServiceCard";

const Service = ({ services }) => {
  return (
    <div className="py-5 container mx-auto p-2">
      <h2 className="text-3xl text-center">Our Servicees</h2>
      <div className="grid lg:grid-cols-2 gap-10 py-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
