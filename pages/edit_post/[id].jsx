import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/header";

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
    const [token, setToken] = useState(""); // トークンの状態を管理
    const image = post.image.url;
    const router = useRouter();

    // コンポーネントがマウントされた時にローカルストレージからトークンを取得
    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // APIリクエストのヘッダーにトークンを含める
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            await axios.put(
                `http://localhost:3000/api/posts/${post.id}`,
                { title: title },
                config
            );

            router.push("/");
        } catch (error) {
            console.error("編集に失敗しました:", error);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.editContainer}>
                <form className={styles.editForm} onSubmit={handleSubmit}>
                    <img
                        src={`http://localhost:3000${image}`}
                        alt="Post Image"
                        className={styles.image} // 追加
                    />

                    <label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.textInput} // 追加
                        />
                    </label>
                </form>

                <button type="submit" className={styles.submitButton}>
                    グレートですよ こいつァ
                </button>
            </div>
        </>
    );
};

export default EditForm;
