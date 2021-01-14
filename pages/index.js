import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am an aspiring software developer who enjoys creating web applications and solving problems. </p>
        <p>
          I am looking for experience and i can build you a website, blog, or E-commerce store for free.
          I can create designs that look awesome and works well with any device. We will work together to create a unique website that represents your brand.
        </p>

        <p>
          You can reach me at <a href="mailto: chesda.reth@outlook.com">chesda.reth@outlook.com</a>
        </p>
        <hr />

        <h2 className={utilStyles.headingLg}>Example Work:</h2>
        <ul>
          <li>
            Online Clothing Store. <a href="https://acme-store.vercel.app/" alt="online clothing store" target="_blank">Demo website</a>
          </li>

          <Image
            src="/images/store.png"
            alt="online clothing store"
            width={384}
            height={430}
          />
          <li>Coffee Shop. <a href="https://smooth-brew.netlify.app/" alt="coffee shop" target="_blank">Demo website</a>

          </li>
          <Image
            src="/images/smooth-brew.png"
            alt="smooth brew coffee shop"
            width={384}
            height={430}
          />
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}