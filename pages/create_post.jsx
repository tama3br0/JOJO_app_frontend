import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/CreateForm.module.css";
import UserData from "../components/UserData";

const CreateForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [previewURL, setPreviewURL] = useState(null); // 追加: プレビュー画像のURLを保持するステート

    const router = useRouter();

    // Canvas要素に画像を描画してリサイズする関数
    const resizeImage = (image, maxWidth, maxHeight) => {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                context.drawImage(img, 0, 0, width, height);

                resolve(canvas.toDataURL("image/jpeg")); // リサイズ後の画像をDataURL形式で返す
            };

            img.onerror = (error) => {
                reject(error);
            };

            img.src = URL.createObjectURL(image);
        });
    };

    // プレビュー画像情報の取得
    const handleImageChange = async (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
            try {
                const resizedImageURL = await resizeImage(
                    selectedImage,
                    500,
                    500
                ); // 幅500px、高さ500pxにリサイズ
                setPreviewURL(resizedImageURL);
            } catch (error) {
                console.error("画像のリサイズ中にエラーが発生しました:", error);
                setPreviewURL(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("post[title]", title);
        formData.append("post[image]", image);

        // トークンを取得
        const token = localStorage.getItem("token");

        // APIリクエストのヘッダーにトークンを含める
        const config = {
            headers: {
                "Content-Type": "multipart/form-data", // Content-Type を適切に設定する
                Authorization: `Bearer ${token}`,
            },
        };
        // console.log(title, image);

        try {
            await axios.post(
                "http://localhost:3000/api/posts",
                formData,
                config
            );
            // router.push("/"); // ←一覧ページ上で入力した場合は、この処理を変えないとリロードしない？
            // 投稿が成功したら親コンポーネントに通知
            onPostCreated();
            // フォームの状態を初期化
            setTitle("");
            setImage(null);
            setPreviewURL(null);

            router.push("/"); // ←一覧ページ上で入力した場合は、この処理を変えないとリロードしない？
        } catch (err) {
            alert("投稿に失敗しました");
        }
    };

    return (
        <div className={styles.stand}>
            <div className={styles.createContainer}>
                <form className={styles.createForm} onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.createLabel}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
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
                            <p>写真のタイトル:</p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                    </div>

                    <button type="submit" className={styles.btnCreate}>
                        オラオラオラオラオラオラ！
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateForm;
