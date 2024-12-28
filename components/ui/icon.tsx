

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="icons">
      <div className="icon-item">
        <FaFacebook className="icon" />
        <span>Facebook</span>
      </div>
      <div className="icon-item">
        <FaInstagram className="icon" />
        <span>Instagram</span>
      </div>
      <div className="icon-item">
        <FaPinterest className="icon" />
        <span>Pinterest</span>
      </div>
      <div className="icon-item">
        <FaTwitter className="icon" />
        <span>Twitter</span>
      </div>
    </div>
  );
}
