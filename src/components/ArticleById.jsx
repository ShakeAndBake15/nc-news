import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./Api";

const ArticleById = () => {

  const {article_id} = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticleById(article_id).then((response) => {
        console.log(response)
        setArticle(response.article)
        setLoading(false)
    })
  }, [article_id])

  if(loading === true){
    return <p>Loading...</p>
  }
  return (
    <section id="articles" key={article.article_id}>
    <br />
      <h4 id="articleTitle"><strong>{article.title}</strong></h4>
      <dl>
        <dt id="authorTitle"><strong>Author:</strong></dt>
        <dd>{article.author}</dd>
        <dt id="catergoryTitle"><strong>Category:</strong></dt>
        <dd>{article.topic}</dd>
        <dt id="bodyTitle">Article:</dt>
        <dd>{article.body}</dd>
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
}

export default ArticleById;