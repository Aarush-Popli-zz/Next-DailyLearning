import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          <h2>Contact Us</h2>
          <form>
            <div style={{marginBottom : "1rem"}}>
              <label for="name" class={styles.label}>Name</label>
              <input type="text" class={styles.control} id="name" placeholder="Enter your name" />
            </div>
            <div style={{marginBottom : "1rem"}}>
              <label for="email" class={styles.label}>Email address</label>
              <input type="email" class={styles.control} id="exampleFormControlInput2" placeholder="Enter your email" />
            </div>
            <div style={{marginBottom : "1rem"}}>
              <label for="desc" class={styles.label}>Message</label>
              <textarea class={styles.control} id="desc" rows="5" placeholder='Enter your message'></textarea>
            </div>
            <button type="submit" class={styles.button}>Send</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact