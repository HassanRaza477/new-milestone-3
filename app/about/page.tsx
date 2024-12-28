export default function About() {
    return (
        <div className="about flex flex-wrap justify-center items-center gap-8 px-6 py-8">
            {/* About Content */}
            <div className="about-content flex flex-col justify-center items-start w-full md:w-2/5">
                <h1 className="text-2xl font-serif font-normal mb-4 text-black">About Me</h1>
                <p className="text-base mb-4 text-black">
                    Hi I am Eris a passionate traveler storyteller and eternal wanderer. Ever since I can remember
                     the idea of exploring new horizons meeting people from diverse cultures
                      and diving into the unknown has fueled my curiosity and zest for life.
                </p>
                <p className="text-base mb-4 text-black">
                    Through this blog I share my journeys across the globe from bustling cityscapes to serene untouched landscapes.
                     Whether its sipping coffee in a quaint European cafe trekking through misty mountain trails or uncovering hidden gems off the beaten path.
                </p>
                <p className="text-base text-black">
                    My mission is to inspire you to pack your bags  chase your dreams and step outside your comfort zone.
                </p>
            </div>

            {/* About Image */}
            <div
                className="about-image w-full md:w-1/3 h-64 md:h-96 bg-center bg-cover"
                style={{ backgroundImage: "url('/images/about.avif')" }}
            ></div>
        </div>

       
    );
}
