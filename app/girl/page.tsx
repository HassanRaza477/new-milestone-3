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
                    <h1 className="girl-title">The Girl From Ipanema</h1>
                    <p>
                        Few songs capture the essence of a moment a feeling or a place as effortlessly as The Girl From Ipanema.
                        Written in 1962 by Brazilian composers Antônio Carlos Jobim and Vinícius de Moraes with later English lyrics
                        by Norman Gimbel
                    </p>
                    <div className="image">
                        <Image
                            src="/images/girl.webp"
                            alt="Blog Cover"
                            width={500}
                            height={300}
                        />
                    </div>

                    <p>
                        The Girl From Ipanema was inspired by a real person Heloísa Eneida Menezes Paes Pinto
                        a young woman who would pass by the Veloso bar in the Ipanema neighborhood of Rio de Janeiro.
                        Her beauty and graceful demeanor captivated Jobim and de Moraes  who immortalized her charm in song.
                        The piece was originally written for a musical called Dirigível but its standalone success far surpassed
                        the play is reach.
                    </p>

                    <h2>The Bossa Nova Movement</h2>
                    <p>
                        The song is a quintessential example of bossa nova a genre that blends samba rhythms with jazz influences.
                        During the 1960s. bossa nova became a global phenomenon, and "The Girl From Ipanema" played a pivotal
                        role in introducing international audiences to Brazilian music.
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
                            <div className="card-image"><img src="/images/blog-1.webp"></img></div>
                            <Link href="mexico"><h2>The Mexico Diary, Day 1: Oaxaca</h2></Link>
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
                            <div className="card-image"><img src="/images/smith.webp"></img></div>
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
            )
}