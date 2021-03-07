import './VoteView.css';
import React from "react";

class VoteView extends React.Component {

  render(){
    const{ controllerstate, vote, loadjson } = this.props
    return (
        <div className="container">
          <header>
            Cat<span>Mash</span >
            <a href="https://github.com/MatthieuDJ/facemash" target="_blank"><button className="github">Mon github</button></a>
          </header>
            <div className="content">
              <div className="content-title">Votez pour votre chat préféré !</div>
              <div class="elements">
                  <div class="element">
                    <img class="image" onClick={() => vote(controllerstate.catleft.id)} src={controllerstate.catleft.url} alt="Left cat"/>
                    <div class="vote-button left" onClick={() => vote(controllerstate.catleft.id)}>VOTE !</div>
                  </div>
                  <div class="element">
                    <img class="image" onClick={() => vote(controllerstate.catright.id)} src={controllerstate.catright.url} alt="Right cat"/>
                    <div class="vote-button right" onClick={() => vote(controllerstate.catright.id)}>VOTE !</div>
                  </div>
            </div>
            </div>
              <footer>
              <a href="/rank"><button className="go-to-scores">Voir les scores</button></a>
              </footer> 
            </div>
      );
  }
}

export default VoteView;
