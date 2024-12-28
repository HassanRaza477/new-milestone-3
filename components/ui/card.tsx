import Image from "next/image";

export default function Card(){
    return(
        <>
        <div className="parent-card flex flex-wrap justify-center gap-6 p-4 bg-stone-200">
      {/* Travel Card */}
      <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden">
        <Image
          src="/images/travel.avif"
          alt="Travel"
          width={350}
          height={250}
          className="w-full h-full object-cover"
        />
        <a href="travel" className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-8 py-3 text-xl font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300">
          Travel
        </a>
      </div>

      {/* Eat Card */}
      <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden">
        <Image
          src="/images/eat.avif"
          alt="Eat"
          width={350}
          height={250}
          className="w-full h-full object-cover"
        />
        <a href="eat" className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-8 py-3 text-xl font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300">
          Eat
        </a>
      </div>

      {/* Relax Card */}
      <div className="child-card relative bg-aquamarine rounded-lg shadow-md overflow-hidden">
        <Image
          src="/images/relax.avif"
          alt="Relax"
          width={350}
          height={250}
          className="w-full h-full object-cover"
        />
        <a href="relax" className="absolute text-center inset-x-1/4 bottom-[40%] bg-white text-blue-700 px-8 py-3 text-xl font-serif font-medium hover:bg-blue-700 hover:text-white transition duration-300">
          Relax
        </a>
      </div>
    </div>
        </>
    )
}