import React, { useEffect, useState } from 'react'
import NotPage from '../NotPage/NotPage'
import { useParams } from 'react-router-dom'
import styles from "../Products/products.module.scss"
function SingleProduct() {
    const {proId} = useParams()
    const [sepProItem, setSepProItem] = useState(null)
    const productoneURL = `http://localhost:4000/products/${proId}`;

    async function getOneCard(){
        const res = await fetch(productoneURL)
        const data = await res.json()
        setSepProItem(data)
    }

useEffect(()=>{
    getOneCard();

},[productoneURL])
if (!sepProItem) {
   return (<NotPage/>)
  }
const {id,desc,img,price} = sepProItem
  return (
    <div className={styles.oneprocard} key={id}>
    <h2>{desc}</h2>
    <img src={img} alt={desc} />
    <h3 >Qiymet:  {price}</h3>
  
  </div>
  )
}

export default SingleProduct
