import React from "react";
import styles from "@/styles/Ranking.module.css"; // CSSモジュールのインポート
import Header from "../components/header";

const Weekly = () => {
    const images = [
        "https://cdn.discordapp.com/attachments/1203891430343581716/1222179373554073752/IMG_7807.jpg?ex=6615463d&is=6602d13d&hm=4471aa2ffad110df3739a29ec8463389505f345419a2a2f789459e79db07e82c&",
        "https://media.discordapp.net/attachments/1203891430343581716/1222960096502611968/IMG_6757.jpg?ex=66181d58&is=6605a858&hm=f45e645d5918897097c395990d710828858d08d2687da7a2e1ac0a93d35871bf&=&format=webp&width=966&height=966",
        "https://bright-magazine.com/wp-content/uploads/2020/05/20200525_7.jpg",
        "https://p.potaufeu.asahi.com/26c5-p/picture/28087718/16e0fce229bf784c54ab39d37728da78.jpg",
        "https://cdn.discordapp.com/attachments/1203891430343581716/1222960097320501248/IMG_6755.jpg?ex=66181d58&is=6605a858&hm=e8332678469f67f1aa16ff9d40be63ac4932c08bd4feb42058fcc4505b93c276&",
        "https://yuuki-rinrin.cocolog-nifty.com/photos/uncategorized/2010/03/28/jojo_2.jpg",
        "https://cdn.discordapp.com/attachments/1203891430343581716/1222960096821117059/IMG_6756.jpg?ex=66181d58&is=6605a858&hm=58d25058cde61e63bec47bed83067079099a90db4c17b7d987392a801db007fe&",
        "https://livedoor.blogimg.jp/anico_bin/imgs/3/3/33992de8.jpg",
        "https://punchbloog.com/wp-content/uploads/2021/12/2FFB5754-0ECD-463A-84A9-89080D6D9BB6-86772-00001242B045E0A1-644x1024.jpeg",
    ];

    const titles = [
        "次の犠牲者はお前だ！",
        "やれることとできないことがある。",
        "愚かな…愚かなッ！",
        "夢を見させてやる…永遠の眠りを。",
        "敵の正体が分かったとたんに、勝ち目が出てきたぞ。",
        "俺は俺自身を信じる！",
        "このディオになめられるか！",
        "人間というのは、一度死んだら終わりじゃないんだ。",
        "『この世界には絶対がない』",
    ];

    const dates = [
        "2024/01/08",
        "2024/02/12",
        "2024/01/15",
        "2024/02/26",
        "2024/01/22",
        "2024/01/01",
        "2024/01/29",
        "2024/02/19",
        "2024/02/05",
    ];

    return (
        <>
            <Header />
            <h1 className={styles.h1}>殿堂入り</h1>
            <div className={styles.gridContainer}>
                {images.map((image, index) => (
                    <div className={styles.box} key={index}>
                        <div className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.rank}>{index + 1}</div>
                        <div className={styles.details}>
                            <p className={styles.title}>{titles[index]}</p>
                            <p className={styles.date}>{dates[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Weekly;
