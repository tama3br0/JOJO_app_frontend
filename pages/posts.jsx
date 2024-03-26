import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

// 谷宮さんに実装してもらうための準備
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

// getStaticPropsが使えませんでした…と思ったら
// export async function getStaticProps() {
//     const res = await fetch("http://localhost:3000/api/posts");
//     const posts = await res.json();
//     return {
//         props: {
//             posts,
//         },
//     };
//     revalidate: 60 * 60 * 24, // ←ここにrevalidateを書いていなかったから使えなかっただけでした…
// }

const Posts = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("http://localhost:3000/api/posts");
            const data = await res.json();
            setPosts(data);

            console.log(data);
        };
        fetchPosts();
    }, []); // ←第二引数の[]がないと、Post.allが無限にリロードされました

    // const handleDelete = async (postId) => {
    //     try {
    //         if (confirm("本当に削除しますか？")) {
    //             await axios.delete(`http://localhost:3000/api/posts/${postId}`);
    //             // 削除に成功したらリロード
    //             router.reload();
    //         }
    //     } catch (error) {
    //         alert("削除に失敗しました");
    //     }
    // };

    return (
        <div className={styles.posts}>
            <h1>投稿一覧</h1>
            <div className={styles.postContainer}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.postItem}>
                        <Link href={`/posts/${post.id}`}>
                            <img
                                src={`http://localhost:3000${post.image.url}`}
                                alt={post.title}
                            />
                            <div className={styles.postDate}>
                                {post.created_at}
                            </div>
                            <h2>{post.title}</h2>
                        </Link>
                        {/* <button
                            className={styles.btnDelete}
                            onClick={() => handleDelete(post.id)}
                        >
                            削除
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
