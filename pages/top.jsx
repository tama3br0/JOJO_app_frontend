import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Top.module.css";

const Top = () => {
    return (
        <>
            <Head>
                <title>Top Page</title>
            </Head>
            <div className={styles.wrapper}>
                <Link href="/login" className={styles.link}>
                    <div className={styles.container}>
                        <h1 className={styles.titleSet}>
                            <span>Stand</span>
                            <span>Up</span>
                            <span>JOJO</span>
                        </h1>
                        <p className={styles.p}>画面をタップしてください</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Top;
