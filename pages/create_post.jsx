import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// 谷宮さんに実装してもらうための準備
import styles from "../styles/CreateForm.module.css";

const CreateForm = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("post[title]", title);
        formData.append("post[image]", image);

        // console.log(formData);
        // console.log(title, image);

        try {
            await axios.post("http://localhost:3000/api/posts", formData);
            router.push("/"); // ←一覧ページ上で入力した場合は、この処理を変えないとリロードしない？
        } catch (err) {
            alert("投稿に失敗しました");
        }
    };

    return (
        <div className={styles.createContainer}>
            <form className={styles.createForm} onSubmit={handleSubmit}>
                <label className={styles.createLabel}>
                    写真をアップロード:
                    <input
                        type="file"
                        accept="image/*" // アップロードできる画像ファイルのみを表示するように設定
                        onChange={(e) => setImage(e.target.files[0])} // 1つの画像ファイルのみ選択できるように設定
                    />
                </label>

                <label className={styles.createTitle}>
                    写真のタイトル:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <button type="submit" className={styles.btnCreate}>
                    投稿ボタン
                </button>
            </form>
        </div>
    );
};

export default CreateForm;
