import React from 'react';


//I use a class component because I need to add some logic inside (burgerToggle) 
class NavBar extends React.Component {
  constructor(props) {
    super();
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  
  burgerToggle() {
    const links = document.querySelector('.narrow-links');
    links.style.display = links.style.display === 'block' ? 'none' : 'block';
  }

  render() {
    return (
      <nav>
        <div className="nav-wide">
          <div className="wide">
            <a href="/">Latest Movies</a>
            <a href="/">Upcoming Movies</a>
            <a href="/">Nearby Events</a>
          </div>
        </div>
        <div className="nav-narrow"> 
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrow-links">
            <a href="/" onClick={this.burgerToggle}>Latest Movies</a>
            <a href="/" onClick={this.burgerToggle}>Upcoming Movies</a>
            <a href="/" onClick={this.burgerToggle}>Nearby Events</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;


