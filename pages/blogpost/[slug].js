import React, { useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blogPost);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog && blog.title}</h1>
      <p className={styles.description}>{blog && blog.content}</p>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript-0' } },
      { params: { slug: 'how-to-learn-javascript-1' } },
      { params: { slug: 'how-to-learn-javascript-2' } },
      { params: { slug: 'how-to-learn-javascript-3' } },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blogPost = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8',);
  return { props: { blogPost: JSON.parse(blogPost) } };
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let blogPost = await data.json();
//   return { props: { blogPost } };
// }

export default Slug;
