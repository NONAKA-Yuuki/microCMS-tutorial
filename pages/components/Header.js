import Link from "next/link";
import styles from '../../styles/components/header.module.scss';
import React, {useState} from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header className={styles.header} id="header">
            <div className={styles.header__inner}>
                <h1 className={styles.title}><Link href="/"><a>17Creative<span>サイトのキャッチコピーだお</span></a></Link></h1>
                <nav className={`${styles.nav} ${openMenu ? styles.open : undefined}`}>
                    <ul className={styles.nav_wrapper}>
                        <li className={styles.nav_item}><Link href="/"><a>WordPress</a></Link></li>
                        <li className={styles.nav_item}><Link href="/"><a>Arduino</a></Link></li>
                        <li className={styles.nav_item}><Link href="/"><a>Fusion360</a></Link></li>
                        <li className={styles.nav_item}><Link href="/"><a>Swift</a></Link></li>
                        <li className={styles.nav_item}><Link href="contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>
                <div className={styles.hum} onClick={() => menuFunction()}>
                    <span className={openMenu ? styles.open : undefined}></span>
                    <span className={openMenu ? styles.open : undefined}></span>
                    <span className={openMenu ? styles.open : undefined}></span>
                </div>
            </div>
        </header>
    )
    
};

export default Header;