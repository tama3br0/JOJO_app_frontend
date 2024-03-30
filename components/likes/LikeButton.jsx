import { useState, useEffect } from "react";
import styles from "@/styles/LikeButton.module.css";

const LikeButton = ({ id }) => {
    // ローカルストレージからlikesの初期値を取得する
    const initialLikes = parseInt(localStorage.getItem(`likes_${id}`)) || 0;
    const [likes, setLikes] = useState(initialLikes);

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    // コンポーネントの状態が更新されるたびに、ローカルストレージにlikesの値を保存する
    useEffect(() => {
        localStorage.setItem(`likes_${id}`, likes);
    }, [id, likes]);

    return (
        <button onClick={incrementLikes} className={styles.likeButton}>
            <img src="/star.png" alt="star" className={styles.icon} />
            <span className={styles.counter}>{likes}</span>
        </button>
    );
};

export default LikeButton;
