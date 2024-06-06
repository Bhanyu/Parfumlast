

import React from 'react'
import styles from "./blogs.module.scss"
function BlogFirst() {
  return (
    <section id={styles.blogspart}>
    <div className={styles.container}>
        <div className={styles.blogbgpart}>
            <img src="https://i.pinimg.com/564x/4b/35/1a/4b351a09e3d95e3bf7599def0f4b6220.jpg" alt="" />
        </div>
        <div className={styles.bgdesc}>
    
            <h2 className={styles.bgtitle}>
            Ayın Sirri<br/> Təbiətin Qoxusu
            </h2>
            <p className={styles.bgcontent}>
            Yunan gözəlliyini və sirrini gündəlik həyatınıza gətirir
            </p>
            <div className={styles.overlay}></div>
        </div>
    </div>
</section>
  )
}

export default BlogFirst
