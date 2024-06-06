import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss"


const Cards = ()=>{

    const [products, setProducts] = useState([]);
    const productsURL = "http://localhost:4000/products";

async function getCards(){
    const response = await fetch(productsURL);
    const data = await response.json();
    setProducts(data);
}

useEffect(()=>{
getCards()
},[])


    return(
      <section id={styles.productscards}>
          <div className={styles.container}>
         <div className={styles.cards}>
            <ul>
            {products && products.slice(0,6).map((product)=>{
    return(
     <li key={product.id}>
         <Link to={`${product.id}`} className={styles.cardlink}>
        <div className={styles.card} key={product.id}>
            <div className={styles.cardimage}>
            <img src={product.img} alt="" className={styles.cardimg} />
            </div>
            <div className={styles.cardinfo}>
                <h3 className={styles.cardtitle}>  {product.desc}</h3>
                <p className={styles.cardprice}>Qiymət: {product.price}</p>
            </div>
        </div>
      </Link>
     </li>
    )
})}
            </ul>

         </div>
         </div>
      </section>
    )
}
export default Cards