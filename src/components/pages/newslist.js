import React from 'react';
//import 'src/assets/newslist.css';
const Newslistitem=({news}) =>(
console.log(news),
<div className="news" class="container-fluid">

<div class="row">
<div class="col-sm-12">
  <div class="card" >
  <img src={news.urlToImage} class="card-img-top" alt="image" size=""></img>
  <div class="card-title">
     <div className="news-publishdate">
        {news.publishedAt}
  </div>
  </div>
    <div class="card-body">
      <h5 class="card-title">{news.title}</h5>
      <p class="card-text">{news.content}</p>
     </div>
  </div>
  </div>
  </div>
</div>

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
