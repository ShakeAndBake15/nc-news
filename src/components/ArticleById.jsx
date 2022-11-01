import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./Api";

const ArticleById = () => {

  const {article_id} = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticleById(article_id).then((response) => {
        setArticle(response.article)
        setLoading(false)
    })
  }, [article_id])

  if(loading === true){
    return <p>Loading...</p>
  }
  return (
    <section id="articleById" key={article.article_id}>
    <br />
      <h4 id="articleTitle"><strong>{article.title}</strong></h4>
      <ul>
        <li><strong>Author:</strong> {article.author}</li>
        <li><strong>Category:</strong> {article.topic}</li>
        <li><strong>Posted date:</strong> {article.created_at.slice(0, 10)}</li>
      </ul>
      <dl>
        <br />
        <dt id="bodyTitle"><strong>Article:</strong></dt>
        <dd>{article.body}</dd>
        <br />
        <dt><strong>Votes ⬆️ ⬇️:</strong></dt>
        <dd> {article.votes}</dd>
        <dt><strong>Comments 💬:</strong></dt>
        <dd>{article.comment_count}</dd>
      </dl>
    <br />
  </section>
  )
}

export default ArticleById;