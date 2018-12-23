import React, {Component} from 'react';
import NewsList from '../pages/newslist.js';
import 'whatwg-fetch';
class Homepage extends Component{
  state={
    news:[]
  }
  componentDidMount()
  {
    var url='https://newsapi.org/v2/top-headlines?'+
          'country=us&'+
          'apiKey=b4e1e52777ab4c248ef0f54c0a1a8fa1';
    var req=new Request(url);
          fetch(req)
         .then(response => response.json())
         .then(json => this.setState({news : json.articles}));
  }
  render()
    {
    return(
      <div className="container-fluid ">
      <NewsList list={this.state.news}/>
      </div>
    );
  }
}
export default Homepage;
