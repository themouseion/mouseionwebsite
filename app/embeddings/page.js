
import React from 'react';
import styles from './Embeddings.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Embeddings = () => {
    return (
        <div className={styles.container}>
            <h1>Embeddings</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Title</th>
                        <th>File Size</th>
                        <th>Embeddings Model</th>
                        <th>Download Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7/13</td>
                        <td>Wikipedia</td>
                        <td>10.31 MB</td>
                        <td>sentence-transformers/all-MiniLM-L6-v2</td>
                        <td>
                            <a href="mouseionlabs.com/3bd9e981-1e71-4573-a2ad-b9e8e876f3ef-bucket/WikiEmbeddings.npy" download>Download</a>
                        </td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>Common Crawl</td>
                        <td>...</td>
                        <td>...</td>
                        <td>
                            <a href="" download>...</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Embeddings;
