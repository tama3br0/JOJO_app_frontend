import React from "react";
import styles from "../../styles/CommentList.module.css";
import { deleteComment } from "../../services/commentService";
import UserName from "../../components/UseUserName";

const CommentList = ({ comments }) => {
    // console.log("comments:", comments);
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
            {comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <div className={styles.authorContentWrapper}>
                        <p className={styles.content}>
                            {JSON.parse(comment.content).content}
                        </p>
                        <p className={styles.author}>
                            By:{JSON.parse(comment.content).author_name}
                        </p>
                    </div>
                    {/* <button
                onClick={() => handleDelete(comment.post_id, comment.id)}
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
