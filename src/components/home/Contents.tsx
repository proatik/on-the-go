import Image from "next/image";

const Contents = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Image
            width={594}
            height={598}
            alt="Content Image"
            src="/images/home/content-1.png"
          />

          <div className="flex flex-col self-stretch my-4 mr-4 justify-between gap-[55px]">
            <div>
              <h2 className="text-[35px] font-bold tracking-tight text-[#263238]">
                Waarom kiezen voor Younitech?
              </h2>

              <p className="mt-4 text-lg text-[#263238]">
                Met Younitech kiest u voor een partner die uw visie begrijpt en
                omvormt tot praktische resultaten. Wij bieden:
              </p>

              <ul className="mt-4 text-lg text-[#263238] list-disc list-inside">
                <li className="mb-2">
                  Technologische oplossingen die met uw bedrijf meegroeien.
                </li>

                <li className="mb-2">
                  Een focus op meetbare resultaten en een naadloze
                  klantbeleving.
                </li>

                <li className="mb-2">
                  Toegang tot een team van ervaren experts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
