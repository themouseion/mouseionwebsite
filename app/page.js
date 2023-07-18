import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mouseion -&nbsp;
          <code className={styles.code}>embedding the worlds information</code>
        </p>
        <div>
          <a
            href="https://themouseion.eth.limo"
            target="_blank"
            rel="noopener noreferrer"
          >
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

      <div className={styles.center}>
        <h2>
          Once a piece of information is embedded, the creativity starts.&nbsp;
        </h2>
      </div>

      <div>
        <Image
          src="/Alexandria.svg"
          alt="Alexandria library"
          width={200}
          height={200}
          priority
        />

      </div>

      <div className={styles.grid}>
        <a
          href="mailto:a@mouseionlabs.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Get in touch <span>-&gt;</span>
          </h2>
          <p>Wanting to contribute, support or get involved in another capacity - reach out.</p>
        </a>

        <Link
          href="/embeddings"
          className={styles.card}
        >
          <h2>
            Embeddings <span>-&gt;</span>
          </h2>
          <p>Download embeddings from wikipedia!!&nbsp;</p>
        </Link>
        

        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}
