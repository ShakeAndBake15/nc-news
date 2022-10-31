import { useEffect, useState } from "react"
import { getArticles } from "./Api";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response.articles);
        })
    })

  return (
    <>
    <h2>Latest Articles</h2>
        {articles.map((article) => {
            return (
                <section id="articles">
                <br />
                  <h4 id="articleTitle"><strong>{article.title}</strong></h4>
                    <p id="authorTitle">Author: <strong>{article.author}</strong></p>
                    <p id="catergoryTitle">Category: {article.topic}</p>
                    <p id="createdAtTitle">Posted: {article.created_at}</p>
                    <p id="articleBody">{article.body.slice(0, 400)}...</p>
                    <p>Votes: {article.votes}</p>
                    <p>Comments: {article.comment_count}</p>
                <br />
                </section>
            )
        })}
    </>
  )
}

export default Articles