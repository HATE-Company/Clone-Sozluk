import React from 'react'
import newsList from '../../../shared/jsons/news.json'
import NewsItem from '../../news/Type1'
function Rightframe() {
  return (
    <div className='news'>
      {newsList.map(item => {
        return <NewsItem 
                  key = {item.id}
                  date = {item.date}
                  text = {item.text}
                  title = {item.title}
                  img = {item.img}
                  category = {item.category}
                />
      })}
    </div>
  )
}

export default Rightframe