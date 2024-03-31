import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/Swiper.module.css";

// 画像とリンクの情報を配列で定義
const images = [
    { src: "/images/dendo.jpg", link: "/fame" }, // 殿堂入り画像
    { src: "/images/gekkan.png", link: "/monthly" }, // 月間ランキング画像
    { src: "/images/shukan.jpg", link: "/weekly" }, // 週間ランキング画像
];

const rankings = ["殿堂入り", "月間ランキング", "週間ランキング"];

export default function BasicSlider() {
    // スライドの設定
    const slideSettings = {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    };

    return (
        <>
            {/* 横線1 */}
            <div className={styles.horizontalLineOne}></div>

            {/* Swiperコンポーネント */}
            <Swiper
                breakpoints={slideSettings}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={true}
                speed={1000}
                navigation
                pagination={{ clickable: true }}
                keyboard
                className={styles.slideWrapper}
            >
                {/* 画像スライド */}
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        {/* 画像リンク */}
                        <a href={item.link}>
                            <div className={styles.slideContent}>
                                {/* 画像 */}
                                <Image
                                    src={item.src}
                                    width={640}
                                    height={360}
                                    alt="Slider Image"
                                    objectFit="cover"
                                    className={styles.slideImage}
                                />
                                {/* ランキングテキスト */}
                                <div className={styles.rankings}>
                                    <span className={styles.rankingsText}>
                                        {rankings[index]}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* 横線2 */}
            <div className={styles.horizontalLineTwo}></div>
        </>
    );
}
