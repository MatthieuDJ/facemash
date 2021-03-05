import './VoteView.css';
import React from "react";

class VoteView extends React.Component {

  render(){
    const{ controllerstate, vote, loadjson } = this.props
    return (
        <div className="App">
          <header className="App-header">
            <h1>CatMash</h1>
            <p>Votez pour votre chat préféré !</p>
          </header>     
            <div className="Images">
                <img onClick={() => vote(controllerstate.catleft.id)} src={controllerstate.catleft.url} alt="Left cat"/>
                <h2>OU</h2>
                <img onClick={() => vote(controllerstate.catright.id)} src={controllerstate.catright.url} alt="Right cat"/>
            </div>
          <footer className="App-footer">
          <a href="/rank"><button className="button">Voir les scores</button></a>
            <h6>Matthieu</h6>
            <a href="https://github.com/MatthieuDJ" target="_blank" rel="noreferrer"><button className="button">Github</button></a>
          </footer> 
        </div>
      );
  }
}

export default VoteView;
