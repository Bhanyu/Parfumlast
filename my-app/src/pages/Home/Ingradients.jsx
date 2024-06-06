
import React, { useEffect } from "react"
import styles from "../Home/home.module.scss"
import { useState } from "react";
const Ingradients = ()=>{
    const ingURL = "http://localhost:4000/ingradients" ;
    const [ingradients, setIngradients] = useState([]);
    useEffect(()=>{
        fetch(ingURL)
        .then(res=>res.json())
        .then(data=>setIngradients(data))
    },[]);
    
    return(

<section id={styles.ingradientspart}>
<div className={styles.container}>
<h1>Ingredients</h1>
    <div className={styles.ingradientsrow}>
       
        {ingradients && ingradients.map((ingradient)=>{
            return(
                <div className={styles.ingradientscol} key={ingradient.id}>
                    <div className={styles.ingimg}>
                        <img className={styles.inginnerimg} src={ingradient.ingradientImg} alt="" />
                    </div>
                    <div className={styles.ingtitle}>
                        <h3>{ingradient.title}</h3>
                    </div>
                </div>
            )
        })}

    </div>
</div>
</section>



    )
}
export default Ingradients