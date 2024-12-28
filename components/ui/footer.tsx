export default function Footer() {
    return (
        <div className="bg-gray-900 text-white py-12 flex flex-col md:flex-row justify-center items-start gap-8 px-4">
            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/5 p-8">
                <div 
                    className="w-28 h-28 bg-center bg-cover" 
                    style={{ backgroundImage: "url('/images/footer-img.avif')" }}
                ></div>
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-serif">About Me</h2>
                    <p className="text-sm leading-6 mt-2">
                    Hi I am Eris a passionate traveler storyteller and eternal wanderer. Ever since I can remember<br></br>
                     the idea of exploring new horizons meeting people from diverse cultures<br></br>
                      and diving into the unknown has fueled my curiosity and zest for life.
                    </p>
                    <a href="#" className="text-sm underline mt-2 inline-block">
                        Read More
                    </a>
                </div>
            </div>

            {/* Email Subscription Section */}
            <div className="w-full md:w-2/5 flex flex-col items-center text-center">
                <h1 className="text-2xl font-serif mb-4">Join My Mailing List</h1>
                <label htmlFor="email" className="mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email here"
                    className="w-4/5 border border-white bg-transparent py-2 px-3 text-sm outline-none focus:border-blue-500 transition-all mb-4"
                    required
                />
                <button className="w-4/5 bg-blue-500 hover:bg-blue-600 py-2 text-sm transition-all">
                    Subscribe Now
                </button>
            </div>
        </div>
    );
}
