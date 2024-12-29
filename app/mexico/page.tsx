import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart, FaEye } from "react-icons/fa";

export default function Mexico() {
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
                    <h1 className="girl-title">The Mexico Diary Day 1: Oaxaca</h1>
                    <p>
                        As the plane descended into Oaxaca the breathtaking view of mountains and valleys welcomed me.
                        Oaxaca known as the cultural heart of Mexico promised an unforgettable blend of history art
                        and culinary wonders. Little did I know Day 1 would set the tone for an incredible adventure.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/blog-1.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </div>

                    <p>
                        Oaxaca is the land of mole and my taste buds were ready for the adventure. At a quaint family-owned restaurant
                        I tried mole negro a rich chocolatey and spicy sauce served with tender chicken. The layers of flavors were unlike
                        anything Id ever tasted.
                    </p>

                    <h2>The Markets of Oaxaca</h2>
                    <p>
                        No visit to Oaxaca is complete without a trip to its vibrant markets. At Mercado Benito Juárez I wandered through aisles
                        brimming with fresh produce, handmade crafts and aromatic spices. Local artisans displayed their intricate textiles
                        and I could not resist buying a handwoven rebozo.
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
                                    src="/images/girl.webp"
                                    alt="The Girl from Ipanema"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="girl"><h2>The Girl from Ipanema</h2></Link>
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
                                    src="/images/smith.webp"
                                    alt="Mykonos with Mr. and Mrs. Smith"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="smith"><h2>Mykonos with Mr. and Mrs. Smith</h2></Link>
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
