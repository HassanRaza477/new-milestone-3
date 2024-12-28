import { FaEye, FaComment, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="Blog-container">

      {/* {Blog-1} */}
      <div className="blog">
        <div className="image">
          <Image 
            src="/images/blog-1.webp" 
            alt="Blog Cover" 
            width={500} // Set the width of the image (adjust as needed)
            height={300} // Set the height of the image (adjust as needed)
          />
        </div>
        <div className="blog-content">
          <h1>The Mexico Dairy Day 1 Oaxaca</h1>
          <p>
            Create a blog post subtitle that summarizes your post in a few short punchy sentences and entices your audience to continue reading
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
          <Image 
            src="/images/girl.webp" 
            alt="Blog Cover" 
            width={500} 
            height={300} 
          />
        </div>
        <div className="blog-content">
          <h1>The Girl From Ipanema</h1>
          <p>
            Create a blog post subtitle that summarizes your post in a few short punchy sentences and entices your audience to continue reading
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
          <Image 
            src="/images/smith.webp" 
            alt="Blog Cover" 
            width={500} 
            height={300} 
          />
        </div>
        <div className="blog-content">
          <h1>Mykonos With Mr and Mrs Smith</h1>
          <p>
            Create a blog post subtitle that summarizes your post in a few short punchy sentences and entices your audience to continue reading
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
  );
}
