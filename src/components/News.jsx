import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Article from './Article';

function News({ isAuth, news }) {
    const [currentInput, setCurrentInput] = useState('');
    const [filtredNews, setFiltredNews] = useState([]);

    const handleInput = (e) => {
        setCurrentInput(e.currentTarget.value)
    }
    useEffect(() => {
        setFiltredNews(news.filter(article => article.title.toLowerCase().includes(currentInput.toLowerCase())))

    }, [currentInput, news])

    return (
        isAuth ?

            <div>
                <div class="input-group mt-5">
                    <input onChange={handleInput} type="text" class="form-control" placeholder="Поиск новостей" ></input>
                </div>
                {
                    filtredNews.map((article, index) => <Article key={index} article={article} />)
                }
            </div>
            : <Redirect to='/login' />
    )
}

export default News
