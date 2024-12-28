import { FaEye, FaComment, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Eat() {
    return (
        <>
            <div className="travel">
                <h1>Eat</h1>
                <p>
                    Traveling is more than just visiting new places. It s about experiencing life in its most vibrant
                    and authentic form.
                </p>

                <div className="Blog-container">
                    {/* {Blog-1} */}
                    <div className="blog">
                        <div className="image">
                            <Image src="/images/eat-1.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>What is Cooking Mexico</h1>
                            <p>
                                Welcome to Cooking Mexico your ultimate destination for exploring the rich and diverse culinary traditions of Mexico.
                            </p>
                        </div>

                        <div className="blog-icons">
                            <div className="icon-left">
                                <span className="icon-item">
                                    <FaEye /> 150
                                </span>
                                <span className="icon-item">
                                    <FaComment /> 25
                                </span>
                            </div>
                            <div className="icon-right">
                                <span className="icon-item">
                                    <FaHeart /> 100
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* {Blog-2} */}
                    <div className="blog">
                        <div className="image">
                            <Image src="/images/eat-2.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>Dark and Beautiful The Magic of Acai</h1>
                            <p>
                                Welcome to Dark and Beautiful a blog dedicated to uncovering the enchanting world of acai.
                                This small deep purple berry from the Amazon rainforest has taken the culinary and wellness world by storm.
                            </p>
                        </div>

                        <div className="blog-icons">
                            <div className="icon-left">
                                <span className="icon-item">
                                    <FaEye /> 80
                                </span>
                                <span className="icon-item">
                                    <FaComment /> 10
                                </span>
                            </div>
                            <div className="icon-right">
                                <span className="icon-item">
                                    <FaHeart /> 20
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* {Blog-3} */}
                    <div className="blog">
                        <div className="image">
                            <Image src="/images/eat-3.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>East of Eden The Best of Thailand s Markets</h1>
                            <p>
                                Thailand s markets are a sensory wonderland  a vibrant tapestry of sights sounds 
                                and smells that capture the essence of this enchanting country.
                            </p>
                        </div>
                        <div className="blog-icons">
                            <div className="icon-left">
                                <span className="icon-item">
                                    <FaEye /> 10
                                </span>
                                <span className="icon-item">
                                    <FaComment /> 2
                                </span>
                            </div>
                            <div className="icon-right">
                                <span className="icon-item">
                                    <FaHeart /> 0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
