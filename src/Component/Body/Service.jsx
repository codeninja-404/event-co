import ServiceCard from "./ServiceCard";

const Service = ({ services }) => {
  return (
    <div className="py-5 container mx-auto p-2">
      <h2 className="text-3xl text-center">Our Servicees</h2>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
