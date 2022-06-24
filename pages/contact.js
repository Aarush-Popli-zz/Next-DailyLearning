import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, desc };

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for your message");
        setName('');
        setEmail('');
        setDesc('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name === 'desc') {
      setDesc(e.target.value);
    }
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" className={styles.control} id="name" value={name} onChange={handleChange} name='name' placeholder="Enter your name" required />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input type="email" className={styles.control} id="email" value={email} onChange={handleChange} name='email' placeholder="Enter your email" required />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="desc" className={styles.label}>Message</label>
              <textarea className={styles.control} id="desc" value={desc} onChange={handleChange} name='desc' rows="5" placeholder='Enter your message' required></textarea>
            </div>
            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact