import axios from "axios";

const newsApi = axios.create({baseURL: 'https://al-nc-news.herokuapp.com/api'})

export const getArticles = () => {
    return newsApi.get('/articles').then((response) => {
        return response.data;
    })
}

export const getArticlesByTopic = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`, topic).then((response) => {
        return response.data;
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`, article_id).then((response) => {
        return response.data;
    })
}

export const patchArticleById = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: 1}).then((response) => {
        return response.data;
    })
}

export const getCommentsByArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
        return response.data;
    })
}

export const addCommentByArticle = (article_id, commentToAdd) => {
    return newsApi.post(`/articles/${article_id}/comments`, commentToAdd).then((response) => {
        return response.data;
    })
}