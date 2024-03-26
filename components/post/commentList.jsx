import React from "react";
import styles from "../../styles/Comment.module.css";
import { deleteComment } from "../../services/commentService";

const CommentList = ({ comments }) => {
    // const handleDelete = async (postId, id) => {
    //     const confirmDelete = window.confirm("本当に削除しますか？");
    //     if (!confirmDelete) {
    //         return;
    //     }

    //     try {
    //         await deleteComment(postId, id);
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("削除に失敗しました:", error);
    //     }
    // };

    return (
        <div className={styles.commentsContainer}>
            <h3 className={styles.heading}>コメント一覧</h3>
            {comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <p className={styles.content}>{comment.content}</p>
                    <p className={styles.author}>By: {comment.author_name}</p>
                    {/* <button
                        onClick={() =>
                            handleDelete(comment.post_id, comment.id)
                        }
                        className={styles.btnOutlineDelete}
                    >
                        削除
                    </button> */}
                    <div className={styles.horizontalLine}></div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
