import React, { useState } from "react";
import { submitComment } from "../../services/commentService";
import styles from "../../styles/Comment.module.css";

const CommentForm = ({ postId, userId }) => {
    const [content, setContent] = useState("");
    const [authorName, setAuthorName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // トークンを取得
        const token = localStorage.getItem("token");

        console.log("Content:", content);

        // APIリクエストのヘッダーにトークンを含める
        const comment = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                content,
                author_name: authorName,
                post_id: postId,
                user_id: userId,
            }),
        };

        try {
            await submitComment(postId, comment);
            console.log("コメントの投稿に成功しました！");
            setContent("");
            setAuthorName("");
            window.location.reload();
        } catch (error) {
            console.error("コメントの投稿に失敗しました:", error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="あなたのユーザー名"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                />
            </div>
            <div className={styles.inputGroup}>
                <textarea
                    className={styles.textarea}
                    placeholder="コメント欄"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className={styles.inputGroup}>
                <button className={styles.button} type="submit">
                    コメントを投稿する
                </button>
            </div>
        </form>
    );
};

export default CommentForm;
