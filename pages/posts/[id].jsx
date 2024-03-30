import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import CommentForm from "../../components/post/commentForm";
import CommentList from "../../components/post/commentList";
import styles from "@/styles/Show.module.css";

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
    const paths = posts.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
    const post = await res.json();

    // コメントデータを取得する
    const commentsRes = await fetch(
        `http://localhost:3000/api/posts/${params.id}/comments`
    );
    const comments = await commentsRes.json();

    return {
        props: {
            post,
            comments,
        },
        revalidate: 60, // 1分ごとに設定
    };
}

const Show = ({ post, comments }) => {
    const [token, setToken] = useState(""); // トークンの状態を管理
    const router = useRouter();

    // コンポーネントがマウントされた時にローカルストレージからトークンを取得
    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);

    const handleDelete = async (postId) => {
        try {
            if (confirm("本当に削除しますか？")) {
                // APIリクエストのヘッダーにトークンを含める
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                await axios.delete(
                    `http://localhost:3000/api/posts/${postId}`,
                    config
                );
                // 削除に成功したら一覧ページへ
                router.push("/");
            }
        } catch (error) {
            alert("削除に失敗しました");
        }
    };

    return (
        <div className={styles.showContainer}>
            <div className={styles.userInfo}>ユーザー情報を表示</div>
            <div className={styles.postContainer}>
                <div className={styles.postImage}>
                    <img
                        src={`http://localhost:3000${post.image.url}`}
                        alt={post.title}
                    />
                </div>
                <div className={styles.postTitle}>{post.title}</div>
            </div>
            <Link href={`/edit_post/${post.id}`}>
                <button className={styles.btnEdit}>編集</button>
            </Link>
            <button
                className={styles.btnDelete}
                onClick={() => handleDelete(post.id)}
            >
                削除
            </button>
            <div className={styles.comment}>
                {/* コメントフォーム */}
                <CommentForm postId={parseInt(post.id)} />
                {/* コメントリスト */}
                <CommentList comments={comments} />
            </div>
        </div>
    );
};

export default Show;
