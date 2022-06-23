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
        
        <Image src="/learn.jpg" alt="" width={240} height={240} className={styles.image}/>

        <style jsx>{`
          h2{
            font-size: 35px;
            margin: 20px 0px 0px 0px;
          }
          .blogItem h3{
            font-size: 20px;
            margin: 15px 0px 5px 0px;
          }
          .blogItem p{
            margin: 5px 0px 15px 0px;
          }
        `}</style>
        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt tempore illum possimus itaque esse? Error vero fuga reprehenderit impedit neque esse temporibus eligendi quam ipsa est laborum, ab iste, veritatis quasi dolore ea necessitatibus iure. Illo incidunt veritatis cum.
            </p>
          </div>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum sunt ea eos. Aspernatur a voluptate in architecto aliquam tempora repellendus ipsa! Dolore non similique nihil sunt impedit rem facilis velit, vitae temporibus accusantium laborum, autem recusandae tempora culpa ullam?
            </p>
          </div>
          <div className="blogItem">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto, placeat voluptas ea consequuntur aut aspernatur et ducimus magnam quas, exercitationem blanditiis possimus alias quidem quis provident dolore eveniet sequi veniam molestiae nam. Adipisci laudantium, facere cupiditate nobis voluptate voluptatum!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
