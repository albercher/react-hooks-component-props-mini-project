import React from "react";
import Article from "./Article";



function ArticleList({ posts }) {

    const postArray = posts.map((el) => {
        return <Article key={el.id} title={el.title} date={el.date} preview={el.preview}
        minutes={el.minutes} />
    })

    return (
        <main>
            {postArray}
        </main>
    )
};

export default ArticleList;