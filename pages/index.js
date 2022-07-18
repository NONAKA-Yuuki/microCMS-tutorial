import Link from "next/link";
import { client } from "../libs/client";
import Layout from "./components/Layout";

import styles from "../styles/components/slider.module.scss"
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home({ blog }) {
  return (
    <Layout home>
      <div className={styles.slider}>
          <div className={styles.body}>
            <div className={styles.container}>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={"auto"}
                //centeredSlides={true}
                spaceBetween={40}
                navigation={true}
                pagination={{ clickable: true }}
                speed={500}
                loop={true}
                loopAdditionalSlides={3}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                className={styles.conatiner}
              >
                {blog.map((blog) => {
                  return (
                    <SwiperSlide key={blog.id}>
                      <article className={styles.item}>
                        <Link href={`/blog/${blog.id}`}>
                          <a>
                            <img className={styles.thum} src={blog.thumnail.url} alt="" />
                            <div className={styles.details}>
                              <p class={styles.cat}>カテゴリ名</p>
                              <h2 className={styles.title}>{blog.title}</h2>
                              <p className={styles.date}>記事更新日</p>
                            </div>
                          </a>
                        </Link>
                      </article>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
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