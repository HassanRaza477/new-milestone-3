import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="parent-card flex flex-wrap justify-center gap-4 p-4 bg-stone-200">
        {/* Travel Card */}
        <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <Image
            src="/images/travel.avif"
            alt="Travel"
            width={350}
            height={250}
            className="w-full h-48 object-cover sm:h-56 md:h-64"
          />
          <a
            href="travel"
            className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Travel
          </a>
        </div>

        {/* Eat Card */}
        <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <Image
            src="/images/eat.avif"
            alt="Eat"
            width={350}
            height={250}
            className="w-full h-48 object-cover sm:h-56 md:h-64"
          />
          <a
            href="eat"
            className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Eat
          </a>
        </div>

        {/* Relax Card */}
        <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <Image
            src="/images/relax.avif"
            alt="Relax"
            width={350}
            height={250}
            className="w-full h-48 object-cover sm:h-56 md:h-64"
          />
          <a
            href="relax"
            className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Relax
          </a>
        </div>
      </div>
    </>
  );
}
