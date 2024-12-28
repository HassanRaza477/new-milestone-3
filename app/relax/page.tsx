import { FaEye, FaComment, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Relax() {
    return (
        <>
            <div className="travel">
                <h1>Relax</h1>
                <p>
                    Traveling is more than just visiting new places. It s about experiencing life in its most vibrant
                    and authentic form.
                </p>

                <div className="Blog-container">
                    {/* {Blog-1} */}
                    <div className="blog">
                        <div className="image">
                            <Image src="/images/relax-1.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>Top 5 Beaches in Corfu Greece</h1>
                            <p>
                                Corfu the emerald jewel of the Ionian Sea is home to some of Greece s most stunning beaches.
                                Known for its turquoise waters lush greenery and golden sands this island is a haven for beach lovers.
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
                            <Image src="/images/relax-2.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>Essential Spa and Body Treatments</h1>
                            <p>
                                Indulging in spa and body treatments is more than a luxury it is a way to rejuvenate the mind body and spirit.
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
                            <Image src="/images/relax-3.webp" alt="Blog Cover" width={500} height={300} />
                        </div>
                        <div className="blog-content">
                            <h1>Silky Sands Turquoise Surf</h1>
                            <p>
                                Nothing compares to the allure of silky sands and turquoise surf where nature s beauty meets tranquility.
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
