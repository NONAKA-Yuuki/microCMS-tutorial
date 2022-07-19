import Link from "next/link";
import styles from '../../styles/components/footer.module.scss'


const handleBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.about_container}>
            <div className={styles.wrap}>
                <h2>ブログタイトル</h2>
                <div className={styles.inner}>
                    <p>
                        プログラミングで何かを創る楽しさを提案するWebメディア。プログラミングを初めてみたいけど何をやればいいのか分からないという初心者の方から、趣味で普段とは違うプログラミング言語で遊んでみたいという中級〜上級者の方までご参考になるような記事を随時発信しています。
                    </p>
                    <ul className={styles.inner__sns}>
                        <li>Follow me</li>
                        <li><a href="https://twitter.com/Yuuki89363093" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com/yuu.ki0617/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://github.com/NONAKA-Yuuki" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.foot_main}>
            <div className={styles.foot_main__nav}>
                <div className={styles.inner}>
                    <div className={styles.inner__box}>
                        <p className={styles.title}>カテゴリ</p>
                        <ul className={styles.list}>
                            <li><a>カテゴリ名</a></li>
                            <li><a>カテゴリ名</a></li>
                            <li><a>カテゴリ名</a></li>
                            <li><a>カテゴリ名</a></li>
                        </ul>
                    </div>
                    <div className={styles.inner__box}>
                        <p className={styles.title}>ブログタイトルについて</p>
                        <ul className={styles.list}>
                            <li><Link href="contact"><a>お問い合わせ</a></Link></li>
                            <li><Link href="/"><a>プライバシーポリシー</a></Link></li>
                            <li><Link href="/"><a>免責事項</a></Link></li>
                            <li><Link href="/"><a>ポートフォリオ</a></Link></li>
                            <li><a href="https://twitter.com/Yuuki89363093" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com/yuu.ki0617/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://github.com/NONAKA-Yuuki" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                    <div className={styles.inner__box}>
                        <a class="twitter-timeline" data-height="260" data-chrome="noheader nofooter" href="https://twitter.com/Yuuki89363093?ref_src=twsrc%5Etfw">Tweets by Yuuki89363093</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                <p>Copyright© 2022 17Creative All Rights Reserved.</p>
                <a className={styles.backToTop} onClick={handleBackToTop}></a>
            </div>
        </div>
    </footer>
);

export default Footer;