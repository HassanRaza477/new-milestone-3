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
                    <h1 className="girl-title">Top 5 Beaches in Corfu, Greece</h1>
                    <p>
                        Corfu the jewel of the Ionian Sea is renowned for its breathtaking beaches crystal-clear waters
                        and lush green landscapes. Whether you are seeking serene coves vibrant beach bars, or family friendly
                        shores Corfu offers a slice of paradise for every traveler. Here are the top 5 beaches in Corfu that you
                        simply must visit.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/relax-1.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </div>

                    <p>
                        Paleokastritsa is one of Corfus most famous beaches boasting turquoise waters framed by dramatic
                        cliffs and lush greenery. The area offers a mix of sandy and pebble shores making it a haven for sunbathers 
                        and adventure seekers alike.
                    </p>

                    <h2>Canal Amour Sidari</h2>
                    <p>
                        Canal dAmour or the Channel of Love is famous for its distinctive sandstone formations and
                        legendary romantic allure. According to local folklor couples who swim through the canal together will 
                        stay in love forever.
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
                                    src="/images/relax-2.webp"
                                    alt="Essential Spa and Body Treatments"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="relax-2">
                                <h2>Essential Spa and Body Treatments</h2>
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
                                    src="/images/relax-3.webp"
                                    alt="Silky Sands Turquoise Surf"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="relax-3">
                                <h2>Silky Sands Turquoise Surf</h2>
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
