//import Image from "next/image";
//import Script from "next/script";
//import Link from "next/link";
import Header from "./Header";

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
        </>
    );
}