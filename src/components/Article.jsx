import React from 'react'

function Article({ article }) {

    return (
        <div className="card m-5">
            <img src={article.urlToImage} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{article.title}</p>
            </div>
        </div>
    )
}

export default Article
