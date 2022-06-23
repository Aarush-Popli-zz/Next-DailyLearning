import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>      
      <main className={styles.main}>
        <h1 className={styles.title}>Daily Learning</h1>

        <p className={styles.description}>
          Here I post about my day-to-day learnings
        </p>
        
        <Image src="/learn.jpg" alt="" width={250} height={250} className={styles.image}/>

        <style jsx>{`
          h2{
            font-size: 35px;
            margin: 20px 0px 0px 0px;
          }
          .blogs{
            margin-bottom: 20px;
          }
          .blogItem h3{
            font-size: 20px;
            margin: 15px 0px 5px 0px;
          }
          .blogItem p{
            margin: 5px 0px 15px 0px;
          }
        `}</style>
        <div className="blogs">
          <h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              veritatis.
            </p>
          </div>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              veritatis.
            </p>
          </div>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              veritatis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
