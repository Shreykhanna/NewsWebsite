import React from 'react';
const Newslistitem=({news}) =>(
console.log(news),
<li key={news.id}>
  {news.publishedAt}
  {news.title}
  {news.description}

</li>
)
const NewsList=(props)=>{
  return (
   <div>
      <ul className='news-list'>
      {
          props.list.map(news =>(
          <Newslistitem news={news} />
          ))
      }
      </ul>
   </div>
  )
}
export default NewsList;
