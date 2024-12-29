import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart, FaEye } from "react-icons/fa";

export default function Girl() {
    return (
        <>
            <div className="girl">
                <div className="post">
                    <h2>All Post</h2>
                    <ul className="links">
                        <li>
                            <Link href="#">Travel</Link>
                        </li>
                        <li>
                            <Link href="#">Eat</Link>
                        </li>
                        <li>
                            <Link href="#">Relax</Link>
                        </li>
                    </ul>
                </div>

                <div className="girl-blog">
                    <h1 className="girl-title">East of Eden The Best of Thailand's Markets</h1>
                    <p>
                    Thailand often referred to as the Land of Smiles is a treasure trove of vibrant markets that
                     showcase the country s rich culture flavorful cuisine and artisanal craftsmanship. From bustling city 
                     bazaars to floating markets and quaint village fairs these markets offer an unforgettable sensory experience.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/eat-3.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </div>

                    <p>
                    Thailands markets are more than just places to shop they are cultural hubs where traditions and 
                    modernity blend seamlessly. These markets reflect the country s warmth creativity and love for life.
                    Authentic Culture  Markets are where locals and visitors come together to celebrate Thai heritage.
                    </p>

                    <h2>Thai Markets A Feast for the Senses</h2>
                    <p>
                    Thailands markets are a feast for the senses a whirlwind of color flavor and culture that you all
                     carry with you long after your visit. Whether you are navigating the bustling aisles of Chatuchak or
                      savoring grilled seafood on a floating boat these markets promise unforgettable memories.
                    </p>

                    <div
                        className="girl-icon"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "15px",
                        }}
                    >
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "24px" }}
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "24px" }}
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "24px" }}
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "24px" }}
                        >
                            <FaTwitter />
                        </a>
                    </div>

                    <div className="girl-footer">
                        <span>0 Views</span>
                        <div className="icon-right">
                            <span className="icon-item">
                                55<FaHeart />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="recent">
                    <div className="recent-post">
                        <h2>Recent Post</h2>
                        <a href="#">See all</a>
                    </div>

                    <div className="girl-parent-card">
                        <div className="girl-card">
                            <div className="card-image">
                                <Image 
                                    src="/images/eat-1.webp"
                                    alt="What is Cooking Mexico"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="eat-1"><h2>What is Cooking Mexico</h2></Link>
                            <div className="blog-icons">
                                <div className="icon-left">
                                    <span className="icon-item">
                                        <FaEye /> 150
                                    </span>
                                </div>
                                <div className="icon-right">
                                    <span className="icon-item">
                                        <FaHeart /> 100
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="girl-card">
                            <div className="card-image">
                                <Image 
                                    src="/images/eat-2.webp"
                                    alt="Dark and Beautiful - The Magic of Acai"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="eat-2"><h2>Dark and Beautiful  The Magic of Acai</h2></Link>
                            <div className="blog-icons">
                                <div className="icon-left">
                                    <span className="icon-item">
                                        <FaEye /> 150
                                    </span>
                                </div>
                                <div className="icon-right">
                                    <span className="icon-item">
                                        <FaHeart /> 100
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
    );
}
