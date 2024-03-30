import axios from "axios";

// コメントを投稿するためのサービス
export const submitComment = async (postId, content) => {
    const token = localStorage.getItem("token");

    console.log("content:", content);

    try {
        const response = await axios.post(
            `http://localhost:3000/api/posts/${postId}/comments`,
            {
                comment: {
                    content: content.body,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        // サーバーからのレスポンスを返す場合
        return response.data;
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

export default { submitComment, deleteComment };
