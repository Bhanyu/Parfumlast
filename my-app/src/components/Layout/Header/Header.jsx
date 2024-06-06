
import styles from "../Header/header.module.scss"
import mainlogo from "../../../../src/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoCall } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

import BurgerMenu from "./BurgerMenu";
const Header = ()=>{


    const [ isOpen, setIsOpen] = useState(false);
    // const toggleMenu = ()=>{
    //     setIsOpen(!isOpen);
    // }

    return (
     <header id={styles.mainhead}>
        <div className={styles.container}>
            <div className={styles.commonpart}>
           
              <div className={styles.logo}>
                    
                        <a href="#">
                            <img className={styles.main_logo} src={mainlogo} alt="" />
                        </a>
                  
                </div>
                <div className={styles.navigation}>
                   
                       <nav>
                        <ul>
                        <li className={styles.navItem}><a href="/">Ana səhifə</a></li>
                            <li className={styles.navItem}><a href="/cards">Məhsullar</a></li>
                            <li className={styles.navItem}><a href="/blog">Bloq</a></li>
                            <li className={styles.navItem}><a href="/faq">FAQ</a></li>
                           
                            <li className={styles.navItem}><a href="/contact">Əlaqə</a></li>
                           
                           
                        </ul>

                       </nav>
                 
                </div>
                <div className={styles.contactinfo}>
               
                   <div className={styles.location}>
                    <Link  className={styles.contactlink} to={"https://www.google.com/maps/dir//9RCV%2BPQP,+Bulbul+Ave,+Baku/@40.3718014,49.7620614,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40307dbbd9b0440f:0xa3ead2d6fb0a0c63!2m2!1d49.8444623!2d40.3718306?entry=ttu"}>
                    <IoLocationOutline  className={styles.contacticon} /><span>Xidmət şəbəkəsi</span>
                    </Link>
                   </div>
                   <div className={styles.langs}>
                   <select name="lang" id="lang">
                   <option  className={styles.option} selected value="AZ">AZE</option>
                   <option  className={styles.option} value="ENG">ENG</option>
                   <option   className={styles.option}  value="RU">RU</option>
                   </select>
                   </div>
                </div>
           
     <BurgerMenu/>

            </div>
        </div>
     
     </header>
    )
    }
    export default Header