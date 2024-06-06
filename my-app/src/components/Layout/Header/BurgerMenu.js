
import styles from "../Header/burger.module.scss"
import { useState } from "react";
const BurgerMenu = ()=>{

const [ isOpen, setIsOpen] = useState(false);
const toggleMenu = ()=>{
    setIsOpen(!isOpen);
}

    return(
        <div className={styles.burgermenu}>
        <div className={`${styles.menuicon} ${isOpen ? styles.open : '' }`} onClick={toggleMenu} >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={`${styles.menucontent} ${isOpen ? styles.show : '' }`}>
                        <li  className={styles.navItem2}><a href="/">Ana səhifə</a></li>
                            <li  className={styles.navItem2}><a href="/cards">Məhsullar</a></li>
                            <li  className={styles.navItem2}><a href="/blog">Bloq</a></li>
                            <li  className={styles.navItem2}><a href="/faq">FAQ</a></li>
                           
                            <li  className={styles.navItem2}><a href="/contact">Əlaqə</a></li>
                           
                           
                        </ul>
                      
       
      </div>
    )
}
export default BurgerMenu