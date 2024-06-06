import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Home/home.module.scss"
import NotPage from "../NotPage/NotPage";
const SingleCard = () => {
  const { cardId } = useParams();
  const [productItem, setProductItem] = useState(null);
  const productURL = `http://localhost:4000/products/${cardId}`;

  async function getCard() {
   
      const res = await fetch(productURL);
      const data = await res.json();
      setProductItem(data);
    
  }

  useEffect(() => {
    getCard();
  }, [productURL]);

  if (!productItem) {
    return (<NotPage/>);
  }

  const { id, img, desc, price } = productItem;

  return (
    <div className={styles.onecard} key={id}>
      <h2>{desc}</h2>
      <img src={img} alt={desc} />
      <h3 >Qiymet:  {price}</h3>
    
    </div>
  );
};

export default SingleCard;



