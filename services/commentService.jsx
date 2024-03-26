import axios from "axios";

// コメントを投稿するためのサービス
export const submitComment = async (comment) => {
    try {
        await axios.post(
            `http://localhost:3000/api/posts/${comment.post_id}/comments`,
            comment
        );
    } catch (error) {
        throw new Error("コメントの投稿に失敗しました");
    }
};

// コメントを削除するためのサービス
export const deleteComment = async (postId, commentId) => {
    try {
        await axios.delete(
            `http://localhost:3000/api/posts/${postId}/comments/${commentId}`
        );
    } catch (error) {
        throw new Error("コメントの削除に失敗しました");
    }
};
