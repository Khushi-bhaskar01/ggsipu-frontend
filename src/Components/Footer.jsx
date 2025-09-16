import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdlOoUV72qtxRmGpG89u5GdDVNFhvd2j5MDW-wjSB13k9YgVQ/viewform" target="_blank">Feedback</a></li>
              <li><a href="http://ipu.ac.in/sdcusict.php" target="_blank">Website Team</a></li>
              <li><a href="http://ipu.ac.in/rti.php" target="_blank">RTI</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="https://spoken-tutorial.org/" target="_blank" rel="noreferrer">Spoken Tutorial</a></li>
              <li><a href="https://nptel.ac.in/" target="_blank" rel="noreferrer">NPTEL</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/pages/Guru-Gobind-Singh-Indraprastha-University/113523068658555?rf=108830159148238" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          © 2022 GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}