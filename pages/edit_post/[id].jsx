import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// 谷宮さんに実装してもらうための準備
import styles from "@/styles/EditForm.module.css";

// 動的に変わるAPIのidを取得
export async function getServerSideProps(context) {
    const id = context.params.id;

    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const post = await res.json();

    return {
        props: {
            post, // プロパティ名
        },
    };
}

const EditForm = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const image = post.image.url;
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3000/api/posts/${post.id}`, {
                title: title,
            });

            router.push("/");
        } catch (error) {
            console.error("編集に失敗しました:", error);
        }
    };

    return (
        <div className={styles.editContainer}>
            <form className={styles.editForm} onSubmit={handleSubmit}>
                <img src={`http://localhost:3000${image}`} alt="Post Image" />

                <label>
                    写真のタイトル:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <button type="submit">更新ボタン</button>
            </form>
        </div>
    );
};

export default EditForm;
