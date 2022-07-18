import Link from "next/link";
import styles from '../../styles/components/header.module.scss'

const Header = () => (
    <header className={styles.header} id="header">
        <div className={styles.header__inner}>
            <h1 className={styles.title}><Link href="/"><a>17Creative<span>サイトのキャッチコピーだお</span></a></Link></h1>
            <nav className={styles.nav} id="js-header-menu">
                <ul className={styles.nav_wrapper}>
                    <li className={styles.nav_item}><Link href="/"><a>WordPress</a></Link></li>
                    <li className={styles.nav_item}><Link href="/"><a>Arduino</a></Link></li>
                    <li className={styles.nav_item}><Link href="/"><a>Fusion360</a></Link></li>
                    <li className={styles.nav_item}><Link href="/"><a>Swift</a></Link></li>
                    <li className={styles.nav_item}><Link href="contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
            <div className={styles.hum} id="js-header-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
);

export default Header;