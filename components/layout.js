import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

const name = 'Chesda Reth'
export const siteTitle = 'Chesda Reth | Portfolio'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9S3FM53SXQ');
` }} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <meta
                    name="description"
                    content="Chesda Reth Dev Portfolio and Blog"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/Chesda%20Reth.png?theme=light&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />


            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            src="/images/profile.jpg"
                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                            alt={name}
                            width={110}
                            height={110}
                        />
                        <h1 className={utilStyles.headingLg}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/profile.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                        width={110}
                                        height={110}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}