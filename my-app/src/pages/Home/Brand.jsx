import React, { useEffect, useState } from 'react';

import styles from "../Home/home.module.scss"

const Brand = ()=>{

const [brands, setBrands] = useState([]);


    const brandImg = "http://localhost:4000/brands";

    useEffect(()=>{
        fetch(brandImg)
        .then(res=>res.json())
        .then(data=>setBrands(data))
    })
    return(
        <section id={styles.brandpart}>
            <div className={styles.brandpartcontainer}>
<div className={styles.brands}>
    {brands && brands.map((brand,id)=>{
       
        return(
            <div data-aos="fade-right" className={ id === 1 ? styles.brandreversed : styles.brand} key={brand.id}>
                <div className={styles.brandimage}>
                    <img src={brand.brandImg} alt="" />
                </div>
                <div className={styles.brandparagraph}>
                    <h2 className={styles.brandtitle}>
                        {brand.brandTitle}
                    </h2>
                    <p className={styles.brandtext}>
                        {brand.brandText}
                    </p>
                </div>
            </div>
        )
    })}
</div>
            </div>
        </section>
    )
}
export default Brand