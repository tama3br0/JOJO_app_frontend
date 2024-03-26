import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// 谷宮さんに実装してもらうための準備
import styles from "../styles/CreateForm.module.css";

const CreateForm = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [previewURL, setPreviewURL] = useState(null); // 追加: プレビュー画像のURLを保持するステート

    const router = useRouter();

    // プレビュー画像情報の取得
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
            const imageURL = URL.createObjectURL(selectedImage);
            setPreviewURL(imageURL);
        }
    };

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
            <div>ユーザー情報を表示</div>
            <form className={styles.createForm} onSubmit={handleSubmit}>
                <div>
                    <label className={styles.createLabel}>
                        写真をアップロード:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange} // 修正: handleImageChangeを使用するように修正
                        />
                    </label>
                </div>
                {/* プレビューを表示 */}
                {previewURL && (
                    <div>
                        <img
                            src={previewURL}
                            alt="画像プレビュー"
                            className={styles.imagePreview}
                        />
                    </div>
                )}
                <div>
                    <label className={styles.createTitle}>
                        写真のタイトル:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                </div>

                <button type="submit" className={styles.btnCreate}>
                    投稿ボタン
                </button>
            </form>
        </div>
    );
};

export default CreateForm;
