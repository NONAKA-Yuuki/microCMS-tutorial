import Header from "./Header";
import Footer from "./Footer";

import styles from "../../styles/components/layout.module.scss"

export default function Layout({ children, home }) {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {!home && (
                    <p>ここはtopページじゃないよ</p>
                )}
                {children}
            </main>
            <Footer />
        </>
    );
}