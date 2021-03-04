import React from "react";
import images from '../Models/cats.json';
import VoteView from '../Views/VoteView';

// todo : Créer un json en react et ajouter la valeur score
// Faire la fonction de choix entre une des deux images (avec le clic) : on clic sur l'image, on recupere l'id et on incremente la valeur score liée. 


class VoteController extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      catleft: {
        id: undefined,
        url: undefined,
      },
      catright: {
        id: undefined,
        url: undefined,
      },
    }
  }
  componentDidMount() {
    var catleft = images["images"][Math.floor(Math.random() * 99)]
    var catright = images["images"][Math.floor(Math.random() * 99)]
    
    this.setState({
      catleft: {
        id: catleft.id, 
        url: catleft.url 
      },
      catright: {
        id: catleft.id, 
        url: catright.url
      },
    })
  }
  render(){
    return <VoteView
      controllerstate = {this.state}
    />;
  }
}

export default VoteController;
