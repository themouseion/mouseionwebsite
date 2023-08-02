'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

async function fetchWithRetry(url, options = {}, retries = 3, backoff = 300) {
  const retryCodes = [408, 500, 502, 503, 504, 522, 524];
  try {
    const response = await fetch(url, options);
    if (response.ok) return await response.json();
    else if (retries > 0 && retryCodes.includes(response.status))
      throw new Error("Retryable error");
    else throw new Error("Non-retryable error");
  } catch (err) {
    if (retries > 0) {
      await new Promise(res => setTimeout(res, backoff));
      return fetchWithRetry(url, options, retries - 1, backoff * 2);
    } else {
      throw err;
    }
  }
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeTaken, setTimeTaken] = useState(null); // Add this state for time taken

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const startTime = performance.now(); // Start time

    const url = `https://search-server-e4kx722caq-wl.a.run.app/search?query=${encodeURIComponent(searchTerm)}`;
    fetchWithRetry(url)
      .then(data => {
        const endTime = performance.now(); // End time
        setTimeTaken((endTime - startTime).toFixed(2)); // Calculate time taken
        setResults(data.results.slice(0, 8)); // Limit to 10 results
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
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
      <div style={{ width: '90%', maxHeight: '80vh', overflowY: 'auto' }}> {/* Scrollable container */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search... (this is beta, try 'anarchy', 'ASCII' or 'Altruism' "
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
        <div style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}> {/* Centering container */}
          <div style={{ width: '80%', textAlign: 'center' }}> {/* Inner container for results */}
            {timeTaken && <p>Time taken: {timeTaken} ms</p>} {/* Display the time taken */}
            {isLoading ? (
              <div style={{ padding: '20px', margin: '10px 0', borderRadius: '15px', border: '1px solid black' }}>
                <h2>Thinking...</h2>
              </div>
            ) : (
              results.map((result, index) => (
                <div key={index} style={{
                  background: '#444',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '15px',
                  maxHeight: '200px',
                  overflow: 'auto',
                  justifyContent: 'center'
                }}>
                  <h3 style={{ margin: '0 0 10px 0', lineHeight: '1.2' }}>
                    <a href={result.url} style={{ color: '#fff' }}>{result.title}</a>
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px' }}>{result.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
