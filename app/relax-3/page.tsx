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
                    <h1 className="girl-title">Silky Sands Turquoise Surf</h1>
                    <p>
                    Theres something magical about the combination of silky soft sands and turquoise waters that
                     transports us to a realm of relaxation and wonder. From tropical paradises to hidden coastal gems
                     these pristine beaches are natures masterpieces. Lets embark on a journey to discover some of the
                      worlds most breathtaking silky sands and turquoise surf destinations.


                    </p>
                    <div className="image">
                        <Image
                            src="/images/relax-3.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                        />
                    </div>

                    <p>
                    Why Visit Nestled on Praslin Island Anse Lazio is famous for its soft 
                    sands framed by granite boulders and crystal clear water.Its a dream destination for honeymooners and photographers.
                    </p>

                    <h2>Pink Sands Beach, Bahamas</h2>
                    <p>
                    Silky sands and turquoise surf create the ultimate beach experience a harmonious blend of 
                    tranquility and natural beauty. Whether you are dreaming of a romantic getaway or an adventure filled 
                    escape these beaches are waiting to inspire and rejuvenate your soul.

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
                            <div className="card-image"><img src="/images/relax-1.webp"></img></div>
                            <Link href="relax-1"><h2>Top 5 Beaches in Corfu Greece</h2></Link>
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
                            <div className="card-image"><img src="/images/relax-2.webp"></img></div>
                            <Link href="relax-2"><h2>Essential Spa and Body Treatments</h2></Link>
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