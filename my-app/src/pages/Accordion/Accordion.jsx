import { useEffect,useState } from "react";
import React from "react";
import styles from "../Accordion/accordion.module.scss";
const Accordion = ()=>{
const queryURL = "http://localhost:4000/accordions";
const [accordions, setAccordions] = useState([]);
const [selected,setSelected] = useState(null)
const toggle = (i)=>{
  setSelected(selected === i ? null :  i)

}
useEffect(()=>{


    fetch(queryURL)
    .then(res=>res.json())
    .then(data=>setAccordions(data))
},[])


    return(
       <section id={styles.accordions}>
        <div className={styles.container}>
            <h1>Ən çox verilən suallar</h1>
            <div className={styles.accordions}>
{accordions && accordions.map((accordion,i)=>{
    return(
        <div className={styles.accordion} key={accordion.id}>
          <div className={styles.question} onClick={()=>toggle(i)}>
          <h3>{accordion.question}</h3>
          <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ?  styles.answer : styles.answerHidden}>

          <p>{accordion.answer}</p>
          </div>
        </div>
    )
})}
            </div>
        </div>
       </section>
    )
}
export default Accordion;