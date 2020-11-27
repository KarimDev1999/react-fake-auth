import axios from 'axios';

export const setNews = payload => ({
    type: 'SET_NEWS',
    payload
})


export const fetchNews = () => dispatch => {
    axios.get('http://newsapi.org/v2/top-headlines?country=ru&apiKey=b9eec594da9d479c95dab871e5f2829c').then(({ data }) => {
        dispatch(setNews(data.articles))
    })
}