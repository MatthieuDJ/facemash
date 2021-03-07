import './VoteView.css';
import React from "react";

class RankView extends React.Component {

  render(){
    const{ catslist } = this.props
    console.log(catslist)
    return (
        <div className="App">
          <header className="App-header">
            <h1>Classement</h1>
          </header>   
          <div className="Images">
            {
              catslist.map((e)=>{
                return <div> 
                  <p> {localStorage.getItem(e.id)} </p>

                  
                </div>
                  
              })
            }

          </div>
          <footer className="App-footer">
            <a href="/"><button className="button">Revenir au vote</button></a>
            <h6>Matthieu Beshara</h6>
            <a href="https://github.com/MatthieuDJ/facemash" target="_blank" rel="noreferrer"><button className="button">Github</button></a>
          </footer> 
        </div>
      );
  }
}

export default RankView;