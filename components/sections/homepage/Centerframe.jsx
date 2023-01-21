import React from 'react'
import Articles from '../../../shared/jsons/articles.json'
import ArticleItem from '../../articles/Type1'

function Centerframe() {
  return (
    <div>
      <div className="frameWrapper">
        <h1 className='sectionTitle'>Trends for You</h1>
        <div className="articles">
          {Articles.map(article => {
            return <ArticleItem
              key={article.id}
              date={article.date}
              text={article.text}
              author={article.author}
              img={article.img}
              id={article.id}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Centerframe