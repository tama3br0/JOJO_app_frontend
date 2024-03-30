import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/Swiper.module.css";

const images = [
    "/images/dendo.jpg",
    "/images/gekkan.png",
    "/images/shukan.jpg",
];

const rankings = ["殿堂入り", "月間ランキング", "週間ランキング"];

export default function BasicSlider() {
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
            <div className={styles.horizontalLine}></div>

            <Swiper
                breakpoints={slideSettings} // スライダーのレスポンシブ設定
                slidesPerView={"auto"} // ハイドレーションエラー対策
                centeredSlides={true} // スライドを中央に配置
                loop={true} // スライドをループさせる
                speed={1000} // スライドが切り替わる時の速度
                navigation // ナビゲーション（左右の矢印）
                pagination={{ clickable: true }} // ページネーション, クリックで対象のスライドに切り替わる
                keyboard // キーボード操作を有効にする
                className={styles.slideWrapper} // スライダー全体のクラス
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slideContent}>
                            <Image
                                src={src}
                                width={640} // 画像の幅を調整
                                height={360} // 画像の高さを調整
                                alt="Slider Image"
                                objectFit="cover"
                                className={styles.slideImage} // 画像のクラス
                            />
                            <div className={styles.rankings}>
                                {/* ランキングのコンテナ */}
                                <span className={styles.rankingsText}>
                                    {rankings[index]}
                                </span>{" "}
                                {/* ランキングテキスト */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
