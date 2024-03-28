import Header from "../components/header";
import Create from "./create_post";
import Ranking from "../components/ranking";

import Posts from "./posts";
// import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <Create />
            <Ranking />
            <Posts />
            {/* <Footer /> */}
        </>
    );
}
