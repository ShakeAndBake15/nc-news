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
    <body>
    <h2>Latest Articles</h2>
    <section>
        {articles.map((article) => {
            return (
                <>
                  <h4>a={article.title}</h4>
                    <p>{article.topic}</p>
                    <p>{article.body}</p>
                    <p>{article.created_at}</p>
                    <p>{article.votes}</p>
                    <p>{article.comment_count}</p>
                </>
            )
        })}
    </section>
    </body>
    </>
  )
}

export default Articles