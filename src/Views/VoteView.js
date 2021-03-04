import './VoteView.css';
import React from "react";

class VoteView extends React.Component {

  render(){
    const{ controllerstate } = this.props
    return (
        <div className="App">
          <header className="App-header">
            <h1>CatMash</h1>
            <p>Votez pour votre chat préféré !</p>
          </header>     
            <div className="Images">
                <img src={controllerstate.catleft.url} alt="Left cat"/>
                <h2>OU</h2>
                <img src={controllerstate.catright.url} alt="Right cat"/>
            </div>
          <footer className="App-footer">
            <h6>Matthieu Beshara</h6>
            <a href="https://github.com/MatthieuDJ" target="_blank" rel="noreferrer"><button className="button">Github</button></a>
          </footer> 
        </div>
      );
  }
}

export default VoteView;
