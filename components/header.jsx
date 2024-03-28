// ヘッダー部分
import React, { useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                            <button className={styles.rightButton}>
                                マイページ
                            </button>
                        </li>
                        <li>
                            <button className={styles.rightButton}>
                                ジョジョ検索リンク
                            </button>
                        </li>
                        <li>
                            <button className={styles.rightButton}>
                                ログアウト
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
