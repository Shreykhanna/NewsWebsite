import React, {Component} from 'react';
import{
  Link,
}from 'react-router-dom';
class Header extends Component{
  render()
  {
    return (
      <header>
      <div className="navBar">
        <nav>
          <ul>
              <Link to='/homepage'>Latest News</Link>
              <Link to='/worldnews'>World News</Link>
              <Link to='/sportnews'>Sport News</Link>
          </ul>
        </nav>
      </div>
      </header>
    );
  }
}

export default Header
