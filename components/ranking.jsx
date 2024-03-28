// Swiperスライダー関係のインポート
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect } from "react";
import styles from "@/styles/Ranking.module.css";

const Ranking = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            slidesPerView: 1, // 一度に表示するスライドの数
            loop: true, // 無限ループ
            spaceBetween: 30, // スライド間のスペース
        });
    }, []);

    return (
        <div className={`swiper-container ${styles.swiperContainer}`}>
            <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
                <div className={`swiper-slide ${styles.swiperSlide}`}>
                    <img src="/images/hq720.jpg" alt="殿堂入り" />
                    <p>殿堂入り</p>
                </div>
                <div className={`swiper-slide ${styles.swiperSlide}`}>
                    <img
                        className={styles.swiperSlideImage}
                        src="/images/e1145_1.png"
                        alt="月間ランキング"
                    />
                    <p>月間ランキング</p>
                </div>
                <div className={`swiper-slide ${styles.swiperSlide}`}>
                    <img
                        className={styles.swiperSlideImage}
                        src="/images/jojo_stand.jpg"
                        alt="週間ランキング"
                    />
                    <p>週間ランキング</p>
                </div>
            </div>
            <div
                className={`swiper-pagination ${styles.swiperPagination}`}
            ></div>
            <div
                className={`swiper-button-prev ${styles.swiperButtonPrev}`}
            ></div>
            <div
                className={`swiper-button-next ${styles.swiperButtonNext}`}
            ></div>
        </div>
    );
};

export default Ranking;
