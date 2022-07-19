import React from "react";
import Link from "next/link";

import Slider from "react-slick";

import { client } from "../libs/client";
import Layout from "./components/Layout";

import styles from "../styles/components/slider.module.scss"


export default function Home({ blog }) {

  const settings = {
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: true,
  };
  
  return (
    <Layout home>
      <div className={styles.slider}>
          <div className={styles.body}>
            <div className={styles.container}>
              <Slider {...settings}>
                {blog.map((blog) => {
                  return (
                      <article className={styles.item}>
                        <Link href={`/blog/${blog.id}`}>
                          <a className={styles.link}>
                          <div className={styles.thumnail} style={{backgroundImage: `url(${blog.thumnail.url})` }}></div>
                            <div className={styles.details}>
                              <p class={styles.cat}>カテゴリ名</p>
                              <h2 className={styles.title}>{blog.title}</h2>
                              <p className={styles.date}>記事更新日</p>
                            </div>
                          </a>
                        </Link>
                      </article>
                  )
                })}
              </Slider>
            </div>
          </div>
      </div>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};