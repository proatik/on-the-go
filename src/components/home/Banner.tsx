const Banner = () => {
  return (
    <section
      className="relative bg-no-repeat bg-[length:95%_auto] bg-right-top py-24 lg:py-32"
      style={{ backgroundImage: "url('/images/home/banner-background.png')" }}
    >
      <div className="absolute top-0 w-full h-full filter blur-sm"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Younitech -{" "}
            <span className="block">Uw Partner in Digitale Innovatie</span>
          </h1>
          <p className="mt-4 text-xl italic text-gray-700">
            "Transformeer uw digitale aanwezigheid met op maat gemaakte
            oplossingen"
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bij Younitech begrijpen we dat een sterke online aanwezigheid
            essentieel is voor succes in de moderne wereld. Met jarenlange
            ervaring in webdesign, applicatieontwikkeling, marketing, en
            branding helpen we bedrijven van elke omvang om te groeien en te
            excelleren. Onze expertise combineert creativiteit met technologie
            om resultaten te leveren die impact maken
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
