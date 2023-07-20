'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("🚧 This feature is under construction! 🚧");
  };

  return (
    <main className={styles.main} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.description}>
        <div>
          <a
            onClick={() => window.history.back()}
            style={{cursor: 'pointer'}}
          >
            {' '}
            <Image
              src="/Mouseion.svg"
              alt="Mouseion Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>
      
      <h1>Search the Wikipedia Index</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          style={{ margin: '20px 0', fontSize: '24px', padding: '15px', borderRadius: '15px', width: '90%', height: '50px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '15px' }}>Search</button>
      </form>
    </main>
  )
}
