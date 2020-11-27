import axios from 'axios';

export const setImages = payload => ({
    type: 'SET_IMAGES',
    payload
})

export const fetchImages = () => dispatch => {
    axios.get('https://pixabay.com/api/?key=18103494-6dfdedec769512f7eec4dcb5a').then(({ data }) => {
        dispatch(setImages(data.hits.map(el => el.webformatURL)))
    })
}