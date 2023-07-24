'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);  // set loading state to true when search begins
    
    // Fetch results from your API
    const response = await fetch(`/api/search?query=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();

    // Store the results in state
    setResults(data.results);
    setIsLoading(false);  // set loading state to false when search is complete
  };

  return (
    <main className={styles.main} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.description}>
        <div onClick={() => window.history.back()}>
          <Image
            src="/Mouseion.svg"
            alt="Mouseion Logo"
            className={styles.vercelLogo}
            width={100}
            height={100}
            priority
          />
        </div>
      </div>

      <h1>Search the Wikipedia Index</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ 
          margin: '20px 0', 
          fontSize: '24px', 
          padding: '15px', 
          borderRadius: '20px', 
          width: '90%', 
          height: '50px', 
          background: 'transparent', // make the background transparent
          border: '1px solid black', // add a black border
          color: '#323232' 
          
        }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '15px', background: '#323232', color: '#fff', border: '1px black' }}>Search</button>
    </form>

      {/* Display the search results */}
      {/* <div style={{ marginTop: '20px', width: '80%', textAlign: 'center' }}>
        {results.map((result, index) => (
          <div key={index}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div> */}
    <div style={{ marginTop: '20px', width: '80%', textAlign: 'center' }}>
      {isLoading ? (
        <div style={{ padding: '20px', margin: '10px 0', borderRadius: '15px', border: '1px solid black' }}>
          <h2>Under Construction 🚧🏗️</h2>
        </div>
      ) : (
        results.map((result, index) => (
          <div key={index} style={{ background: '#444', padding: '20px', margin: '10px 0', borderRadius: '15px' }}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))
      )}
    </div>
    </main>
  )
}
