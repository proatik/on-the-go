import Image from "next/image";

const features = [
  {
    title: "Applicaties",
    image: "/svgs/home/feature-1.svg",
  },
  {
    title: "Marketing & Branding",
    image: "/svgs/home/feature-2.svg",
  },
  {
    title: "Hosting & Onderhoud",
    image: "/svgs/home/feature-3.svg",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Onze diensten, op maat voor uw succes
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-64 w-64 transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
