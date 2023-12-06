import React from 'react';
import styles from './page.module.css';

const Embeddings = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Embeddings</h1>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Data</th>
                            <th>Title</th>
                            <th>File Size</th>
                            <th>Embeddings Model</th>
                            <th>Download Embeddings</th>
                            <th>Download Metadata</th> {/* New Header */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7/13</td>
                            <td>
                                <a href="https://dumps.wikimedia.org/enwiki/20230701/">enWiki</a>
                            </td>
                            <td>Wikipedia</td>
                            <td>...</td>
                            <td>sentence-transformers/all-MiniLM-L6-v2</td>
                            <td>
                                <a href="" download> <b> Embeddings</b></a>
                            </td>
                            <td>
                                <a href="https://ipfs.io/ipfs/bafybeic7mblcdr4re3ul6m3j4wchub6dxnfezpkyg5g6owydtidh7jml2q" download><b>Metadata</b></a>
                            </td>
                        </tr>
                        {/* Repeat for each row */}
                        <tr>
                            <td>...</td>
                            <td> <a href="https://commoncrawl.org/the-data/get-started/">CC Data </a> </td>
                            <td>Common Crawl</td>
                            <td>...</td>
                            <td>...</td>
                            <td>
                                <a href="" download><b>...</b></a>
                            </td>
                            <td>
                                <a href="" download><b>Metadata</b></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Embeddings;
