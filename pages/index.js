import Header from "../components/header";
import Create from "./create_post";
import Ranking from "../components/ranking";

import Posts from "./posts";
import { useState } from "react";
// import Footer from "../components/footer";

export default function Home() {
    const [refreshPosts, setRefreshPosts] = useState(false);

    const handlePostCreated = () => {
        // 投稿が作成されたら投稿一覧を再取得するために、refreshPostsをトグルする
        setRefreshPosts(!refreshPosts);
    };
    return (
        <>
            <Header />
            <Create onPostCreated={handlePostCreated} />
            <Ranking />
            <Posts key={refreshPosts} />
            {/* <Footer /> */}
        </>
    );
}
