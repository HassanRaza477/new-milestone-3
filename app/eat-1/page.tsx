import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart, FaEye } from "react-icons/fa";

export default function Eat1() {
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
                    <h1 className="girl-title">What is Cooking Mexico</h1>
                    <p>
                        Mexicos culinary heritage is a tapestry woven from ancient traditions local ingredients
                        and regional diversity. From vibrant street food to elaborate festive dishes every bite tells
                        a story. In this blog we will explore what makes Mexican cuisine so magical and highlight the
                        must try dishes that define this culinary wonderland.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/eat-1.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                        />
                    </div>

                    <p>
                        Mexican food is deeply influenced by its indigenous roots primarily Aztec and Maya with Spanish
                        colonial flavors adding another layer of complexity. Staples like corn beans and chiles form
                        the foundation of most dishes while the use of fresh herbs and spices ensures that no two dishes
                        are ever quite the same.
                    </p>

                    <h2>The Sweet Side of Mexico</h2>
                    <p>
                        Mexican desserts are as diverse and delicious as the savory dishes. Indulge in churros dipped in
                    chocolate creamy flan or pan dulce sweet bread. During festivals do not miss alegrías a sweet
                        treat made from amaranth and honey or calaveras de azúcarcolorful sugar skulls made for Día de
                        los Muertos.
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
                                    src="/images/eat-2.webp"
                                    alt="Dark and Beautiful - The Magic of Acai"
                                    width={310}
                                    height={180}
                                />
                            </div>
                            <Link href="eat-2">
                                <h2>Dark and Beautiful  The Magic of Acai</h2>
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
                                    src="/images/eat-3.webp"
                                    alt="East of Eden - The Best of Thailand's Markets"
                                    width={310}
                                    height={180}
                                />
                            </div>
                            <Link href="eat-3">
                                <h2>East of Eden  The Best of Thailand's Markets</h2>
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
