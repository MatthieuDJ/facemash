import './RankView.css';
import React from "react";

class RankView extends React.Component {

  render(){
    return (
        <div className="App">
          <header className="App-header">
            <h1>Classement</h1>
          </header>   
          <footer className="App-footer">
            <a href="/"><button className="button">Revenir au vote</button></a>
            <h6>Matthieu Beshara</h6>
            <a href="https://github.com/MatthieuDJ" target="_blank" rel="noreferrer"><button className="button">Github</button></a>
          </footer> 
        </div>
      );
  }
}

export default RankView;
