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

  // ISO 8601形式で取得した更新日情報を0000年00月00日という形式にフォーマットする
  const dateFormat = (date) => {
    var splitDate = date.split('-');
    const formatDate = splitDate[0] + "年" + splitDate[1] + "月" + splitDate[2].substring(0, splitDate[2].indexOf('T')) + "日";
    return formatDate;
  }
  
  return (
    <Layout home>
      <div className={styles.slider}>
          <div className={styles.body}>
            <div className={styles.container}>
              <Slider {...settings}>
                {blog.slice(0, 5).map((blog) => { // 更新日順に上から5記事取得する
                  return (
                      <article className={styles.item}>
                        <Link href={`/blog/${blog.id}`}>
                          <a className={styles.link}>
                          <div className={styles.thumnail} style={{backgroundImage: `url(${blog.thumnail.url})` }}></div>
                            <div className={styles.details}>
                              <p class={styles.cat}>カテゴリ名</p>
                              <h2 className={styles.title}>{blog.title}</h2>
                              <p className={styles.date}>{ dateFormat(blog.revisedAt) }</p>
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