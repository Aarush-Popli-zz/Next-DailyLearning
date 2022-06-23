import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from 'fs';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>All Blogs</h2>
          {blogs.map((blogItem) => {
            return (
              <div className={styles.blogItem} key={blogItem.slug}>
                <Link href={`./blogpost/${blogItem.slug}`}>
                  <h3>{blogItem.title}</h3>
                </Link>
                <p>{blogItem.content.substr(0, 400)}...</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  let myFile;
  let allBlogs = [];
  let data = await fs.promises.readdir("blogdata")
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return { props: {allBlogs} }
}

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blog");
//   let allBlogs = await data.json();
//   return { props: {allBlogs} }
// }

export default Blogs;