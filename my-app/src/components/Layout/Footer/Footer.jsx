import styles from "../Footer/footer.module.scss";
import { Link } from "react-router-dom";
import footlogo from "../../../../src/images/footerlogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footercontainer}>
        <div className={styles.footercontent}>
          <div className={styles.footerlogo}>
            <img src={footlogo} alt="logo" className={styles.footerlogoimg} />
          </div>
          <div className={styles.midfootpart}>
            <div className={styles.footerinnerlinks}>
              <ul className={styles.firstul}>
                <li>
                  <Link className={styles.footnav} to={"/"}>Ana səhifə</Link>
                </li>
                <li>
                  <Link  className={styles.footnav} to={"/cards"}>Mehsullar</Link>
                </li>
                <li>
                  <Link  className={styles.footnav} to={"/blog"}>Bloq</Link>
                </li>
                <li>
                  <Link  className={styles.footnav} to={"/faq"}>FAQ</Link>
                </li>
               
              </ul>
              <ul className={styles.secondul}>
          
            
                <li>
                  <Link  className={styles.footnav} to={"#"}>Xidmetlerimiz</Link>
                </li>
                <li>
                  <Link  className={styles.footnav} to={"#"}>Endirimler</Link>
                </li>
                <li >
                  <Link  className={styles.footnav} to={"https://mail.google.com/mail/u/0/#inbox"}><MdOutlineEmail  className={styles.sosicon}  /> artemisparfume@gmail.com</Link>
                </li>
                <li className={styles.phone}> 
                <FaPhoneAlt className={styles.sosicon} /> 077-858-20-41
                </li>
              </ul>
            </div>
            <div className={styles.footerform}>
              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.footerinput}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className={styles.socialmediapart}>
            <Link className={styles.sociallink} to={"https://www.facebook.com/"}>
              <FaFacebook className={styles.socialicon} />
            </Link>
            <Link className={styles.sociallink} to={"https://www.instagram.com/accounts/emailsignup/"}>
              <FaInstagram  className={styles.socialicon} />
            </Link>
            <Link className={styles.sociallink} to={"https://x.com/?lang=en"}>
              <FaXTwitter  className={styles.socialicon} />
            </Link>
            <Link className={styles.sociallink} to={"https://www.pinterest.com/"}>
            <FaPinterest   className={styles.socialicon}/>
            </Link>
            <Link className={styles.sociallink} to={"https://www.youtube.com/watch?v=NlwIDxCjL-8&list=RDNlwIDxCjL-8&start_radio=1"}>
            <FaYoutube  className={styles.socialicon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
