import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "./Api";

const ArticleByCatergory = () => {
 
    const {topic} = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticlesByTopic(topic).then((response) => {
          setArticles(response.articles)
          setLoading(false)
        })
    })
    
    if(loading === true){
        return <p>Loading...</p>
    }
    return (
      <>
      <h2>Latest {topic} articles</h2>
      {articles.map((article) => {
        return (
            <section id="articles" key={article.article_id}>
            <br />
              <h4 id="articleTitle"><strong>{article.title}</strong></h4>
              <dl>
                <dt id="authorTitle"><strong>Author:</strong></dt>
                <dd>{article.author}</dd>
                <dt id="catergoryTitle"><strong>Category:</strong></dt>
                <dd>{article.topic}</dd>
                <dt id="createdAtTitle"><strong>Posted date:</strong></dt>
                <dd>{article.created_at.slice(0, 10)}</dd>
                <dt><strong>Votes ⬆️ ⬇️:</strong></dt>
                <dd> {article.votes}</dd>
                <dt><strong>Comments 💬:</strong></dt>
                <dd>{article.comment_count}</dd>
              </dl>
            <br />
          </section>
        )
    })}
</>
    )
}

export default ArticleByCatergory;