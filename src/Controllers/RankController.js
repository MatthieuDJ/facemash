import React from "react";
import images from '../Models/cats.json';
import RankView from '../Views/RankView';

class RankController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

// Créer une variable globale me permettant de stocker 


componentDidMount() {

    }

    render(){
        return <RankView
        catslist = {images["images"]}
        />}
}

export default RankController;