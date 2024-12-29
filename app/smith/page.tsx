import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart, FaEye } from "react-icons/fa";

export default function Smith() {
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
                    <h1 className="girl-title">Mykonos with Mr. and Mrs. Smith</h1>
                    <p>
                        Under the dazzling Greek sun Mykonos gleamed like a dream. Known for its whitewashed buildings
                        turquoise waters and vibrant energy this Cycladic island is a haven for lovers and adventurers alike.
                        With Mr. and Mrs. Smith our journey to Mykonos became more than a getaway it was an experience of luxury
                        intimacy and unforgettable memories.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/smith.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </div>

                    <p>
                        The moment we stepped off the ferry the salty sea breeze and glistening waves welcomed us.
                        Our home for this idyllic escape was a boutique hotel curated by Mr. and Mrs. Smith perched on
                        a hillside overlooking the Aegean. The elegant architecture blended seamlessly with the natural
                        surroundings and the infinity pool seemed to merge with the horizon.
                    </p>

                    <h2>Mornings in Mykonos Town</h2>
                    <p>
                        We began each day with a leisurely stroll through the labyrinthine streets of Chora Mykonos Town.
                        The narrow alleys lined with chic boutiques and charming cafes created the perfect backdrop for
                        an unhurried morning. We stopped at a local bakery for spanakopita and a rich Greek coffee before
                        heading to the iconic windmills of Kato Mili to take in the view.
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
                            <Link href="girl">
                                <h2>The Girl from Ipanema</h2>
                            </Link>
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
                                    src="/images/blog-1.webp"
                                    alt="The Mexico Diary, Day 1: Oaxaca"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="mexico">
                                <h2>The Mexico Diary Day 1 Oaxaca</h2>
                            </Link>
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
