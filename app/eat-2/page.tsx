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
                    <h1 className="girl-title">Dark and Beautiful  The Magic of Acai</h1>
                    <p>
                    Nestled in the lush rainforests of the Amazon the açaí berry is a small dark purple fruit
                     with a big reputation. Known as a superfood açaí has taken the health and wellness world by storm 
                    offering a unique blend of earthy flavors and incredible nutritional benefits.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/eat-2.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                        />
                    </div>

                    <p>
                    For centuries, indigenous communities in the Amazon rainforest have relied on açaí as a dietary staple.
                     The berries grow in clusters on tall açaí palm trees which thrive in the humid climate. Traditionally
                      the fruit was harvested and made into a nutrient dense pulp serving as a vital source of energy for 
                      local populations.

                    </p>

                    <h2>Açaí Bowls: The Global Trend</h2>
                    <p>
                    One of the most popular ways to enjoy açaí is in the form of an açaí bowl.
                     These vibrant bowls are made with frozen açaí pulp blended with fruits like bananas and berries
                     then topped with granola nuts seeds, and fresh fruit.
                     Açaí is not just good for your body; its also a boon for your skin. Its antioxidants help fight free radicals 
                     reducing signs of aging and promoting a radiant complexion. Many skincare brands now include açaí oil in their
                      products for its hydrating and anti inflammatory properties.

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
                            <div className="card-image"><img src="/images/eat-1.webp"></img></div>
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
                            <div className="card-image"><img src="/images/eat-3.webp"></img></div>
                            <Link href="eat-3"><h2>East of Eden - The Best of Thailand is Markets</h2></Link>
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
            )
}