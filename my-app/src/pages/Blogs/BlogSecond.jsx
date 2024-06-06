import React, { useEffect , useState} from "react";
import styles from  "./blogs.module.scss";

export default function BlogSecond() {
  const blogsURL = "http://localhost:4000/blogs";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(blogsURL)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <section id={styles.informationpart}>
      <div className={styles.container}>
        <div className={styles.whyartemis}>
          <div className={styles.artemisimg}>
            <img
              src="https://i.pinimg.com/564x/72/69/d8/7269d8b658ab8122dc258733daa08436.jpg"
              alt=""
            />
          </div>
          <div className={styles.artemisinfo}>
            <h2>Niyə Artemis?</h2>
            <p>
              Artemis duxuları, qədim Yunan mifologiyasının ay tanrıçası
              Artemis'in mistik və əsrarəngiz dünyasından ilhamlanmış xüsusi
              ətirlər toplusudur. Bu yazıda Artemis duxularının mənası, onların
              necə hazırlandığı və hər bir ətirin hansı duyğuları oyandırdığı
              haqqında danışacağıq.
            </p>
          </div>
        </div>
        <div className={styles.characters}>
            {blogs && blogs.map((blog)=>{
                return(
                    <div className={styles.blogitem} key={blog.id}>
<div className={styles.blogitemimg}>
    <img src={blog.blogImg} alt="" />
</div>
<div className={styles.blogiteminfo}>
    <h2>{blog.blogTitle}</h2>
    <p>{blog.blogDesc}</p>
</div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
