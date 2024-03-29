// ヘッダー部分
import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/Header.module.css";
import LogoutButton from "../components/LogoutButton";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <button className={styles.leftButton}>一覧ページ</button>
            <div
                className={`${styles.menuIcon} ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
            </div>
            {isMenuOpen && (
                <div className={styles.menuContent}>
                    <ul>
                        <li>
                            <button className={styles.rightButton} onClick={() => router.push('/mypage')}>
                                マイページ
                            </button>
                        </li>
                        <li>
                            <button className={styles.rightButton} onClick={() => router.push('https://dic.pixiv.net/a/%E3%82%B8%E3%83%A7%E3%82%B8%E3%83%A7%E3%81%AE%E5%A5%87%E5%A6%99%E3%81%AA%E5%86%92%E9%99%BA%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9')}>
                                ジョジョ検索リンク
                            </button>
                        </li>
                        <li>
                            <LogoutButton /> {/* LogoutButtonコンポーネントを呼び出す */}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
