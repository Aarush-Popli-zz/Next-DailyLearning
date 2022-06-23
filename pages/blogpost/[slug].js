import React, { useState } from "react";
import styles from "../../styles/Blogpost.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.blogPost);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog && blog.title}</h1>
      <p className={styles.description}>{blog && blog.content}</p>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blogPost = await data.json();
  return { props: { blogPost } };
}

export default slug;
