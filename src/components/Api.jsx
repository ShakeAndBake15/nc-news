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