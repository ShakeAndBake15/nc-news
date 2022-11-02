import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticle } from "./Api";

const CommentsByArticle = () => {

    const {article_id} = useParams()

    useEffect(() => {
        getCommentsByArticle(article_id).then((response) => {
            
        })
    })

  return (
    <h2>{}</h2>
  )
}

export default CommentsByArticle;