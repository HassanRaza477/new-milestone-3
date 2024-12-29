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
                    <h1 className="girl-title">Essential Spa and Body Treatments</h1>
                    <p>
                        In todays fastpaced world indulging in spa and body treatments is more than just a luxury its a
                        necessity for maintaining balance and well being. From soothing massages to rejuvenating facials
                        these treatments not only relax the body but also revitalize the mind. Here is a guide to essential
                        spa and body treatments that you should consider for a complete wellness experience.
                    </p>
                    <div className="image">
                        <Image
                            src="/images/relax-2.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </div>

                    <p>
                        This holistic treatment uses essential oils to enhance physical and emotional well being.
                        The therapist customizes the oil blend to suit your needs whether you want to feel energized 
                        relaxed or uplifted.
                    </p>

                    <h2>Mud or Clay Body Wrap</h2>
                    <p>
                        This treatment involves applying a layer of mineral rich mud or clay to the body followed by wrapping it in a thermal blanket.
                        It s perfect for detoxifying the skin and improving its texture.
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
                                    src="/images/relax-1.webp"
                                    alt="Top 5 Beaches in Corfu Greece"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <Link href="relax-1">
                                <h2>Top 5 Beaches in Corfu, Greece</h2>
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
