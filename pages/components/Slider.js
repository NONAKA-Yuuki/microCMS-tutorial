import Image from 'next/image'
import styles from "../../styles/components/slider.module.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    '/test_image1.png',
    '/test_image2.png',
    '/test_image3.png',
    '/test_image4.png',
]

const Slider = ({blog}) => (
    <div className={styles.slider}>
        <div className={styles.body}>
            <div className={styles.conatiner}>
                <Swiper>
                    {blog.map((blog) => {
                        return (
                            <SwiperSlide key={blog.id}>
                                <div className={styles.item}>
                                    <Link href={`/blog/${blog.id}`}>
                                        <a>
                                            <h2>{blog.title}</h2>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </div>
);

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });
  
    return {
      props: {
        blog: data.contents,
      },
    };
  };

export default Slider;