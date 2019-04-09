import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  collapseMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <div
            className={this.state.collapsed ? "header-top open" : "header-top"}
          >
            <h2>Start Bootstrap</h2>
            <nav>
              <span>Services</span>
              <span>Portfolio</span>
              <span>About</span>
              <span>Team</span>
              <span>Contact</span>
            </nav>
            <button onClick={() => this.collapseMenu()} className="ham">
              MENU
            </button>
          </div>
          <div className="header-center">
            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </header>
        <main className="portfolio">
          <h2>PORTFOLIO</h2>
          <p>Here are my portfolio pieces</p>
          <div className="thingy">
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg" />
              </div>
              <h4>Threads</h4>
              <p>Illustration</p>
            </div>
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg" />
              </div>
              <h4>Explore</h4>
              <p>Graphic Design</p>
            </div>
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg" />
              </div>
              <h4>Finish</h4>
              <p>Identity</p>
            </div>
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg" />
              </div>
              <h4>Lines</h4>
              <p>Branding</p>
            </div>
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg" />
              </div>
              <h4>Southwest</h4>
              <p>Website Design</p>
            </div>
            <div className="item">
              <div>
                <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg" />
              </div>
              <h4>Window</h4>
              <p>Photography</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
