import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticlesByTopic } from "./Api";

const ArticleByCatergory = () => {
 
    const {topic} = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticlesByTopic(topic).then((response) => {
          setArticles(response.articles)
          setLoading(false)
        }).catch((err) => {
          setLoading(false)
          setIsError(true)
        })
    })
    
    if(loading === true){
        return <p>Loading...</p>
    }
    if(isError === true){
      return <h1 id="topicError">Topic not found 🤔<br />Please return to the <Link to={'/'}>home page</Link></h1>
    }
    return (
      <>
      <h2>Latest {topic} articles</h2>
      {articles.map((article) => {
        return (
            <section id="articles" key={article.article_id}>
            <br />
            <Link to={`/articles/${article.article_id}`}><h4 id="articleTitle"><strong>{article.title}</strong></h4></Link>
              <dl>
                <dt id="authorTitle"><strong>Author:</strong></dt>
                <dd>{article.author}</dd>
                <dt id="catergoryTitle"><strong>Category:</strong></dt>
                <dd>{article.topic}</dd>
                <dt id="createdAtTitle"><strong>Posted date:</strong></dt>
                <dd>{article.created_at.slice(0, 10)}</dd>
                <dt><strong>Votes ❤:</strong></dt>
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